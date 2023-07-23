// worker.js

const axios = require('axios');
const moment = require('moment');
const H5guard = require('./mt_js.js');

const repeat = 20  // 抢券默认请求次数(每个符合的id请求5次),

// let offsetTime = 0  // 本地与美团平台时间戳偏移量
// const syncTime = 3000  // 提前3s再次同步时间
const ticketingTime = 1200  // 抢券提前时间(提前1s) 自己调啊：提前越早，repeat也要调大
const intervalTime = 100  //请求间隔时间0.1s
const signTime = 10000  // sign生成时间（提前10s）


//睡眠，请求间隔时间
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// //  获取同步后本地时间戳
// const getTimestamp = async () => {
//     return Date.now() + offsetTime;
// };


// 生成签名
async function generateSign(cookie, url, signDataArr) {
    const data = {
        "cType": "mti", "fpPlatform": 3, "wxOpenId": "", "appVersion": ""
    };
    const headers = {
        "Host": "promotion.waimai.meituan.com",
        "Connection": "keep-alive",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://market.waimai.meituan.com",
        "mtgsig": {},
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
        "Content-Type": "application/json",
        "Referer": "https://market.waimai.meituan.com/",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": cookie
    };
    const userAgent = headers["User-Agent"];

    const h5guard = new H5guard(cookie, userAgent);
    const mtObj = await h5guard.sign(url, data);
    const jsonData = mtObj.mtFingerprint
    // const mtgsig = mtObj.mtgsig
    //将生成的mtgsig补全headers的mtgsig
    headers.mtgsig = mtObj.mtgsig;
    const dataObj = {jsonData, headers}
    signDataArr.push(dataObj)
    return signDataArr
}

//定时抢券任务
async function postTask(couponObj, cookie, result) {
    // 抢券url
    const url = couponObj.couponUrl;

    const makeRequest = async function (url, data, headers, result, lastPost) {
        try {
            const response = await axios.post(url, data, {headers});
            if (response.status === 200 && response.data.hasOwnProperty('msg')) {
                console.log(response.data.msg)
                if (response.status === 200 && (response.data.msg.includes("成功") || response.data.msg.includes("已领取"))) {
                    result[couponObj.name] = `result_info: 成功抢到优惠券！`;
                    console.log(`${couponObj.name}: 已抢到！,${moment(nowTimeStamp).format('YYYY-MM-DD HH:mm:ss.SSS')}`);
                    // 向主线程发送消息
                    process.send(result)
                    //退出线程
                    process.exit();
                }
                //最后一次post请求、没券、异常停止抢券
                // if (lastPost || response.data.msg.includes("来晚了") || response.data.msg.includes("异常")) {
                if (lastPost || response.data.msg.includes("来晚了")) {
                    result[couponObj.name] = `result_info: 没抢到~, msg: ${response.data.msg}`;
                    console.log(`${couponObj.name}, 没抢到~, msg: ${response.data.msg}, ${moment(nowTimeStamp).format('YYYY-MM-DD HH:mm:ss.SSS')}`);
                    // 向主线程发送消息
                    process.send(result)
                    //退出线程
                    process.exit();
                }
            } else {
                //这里随便了，状态码403直接到error
                result[couponObj.name] = `result_info: 抢券失败，状态码：${response.status}`;
                console.log(`${couponObj.name}, 抢券失败，状态码：${response.status}`);
            }
            // console.log(response.data); // 输出响应数据
        } catch (error) {
            result[couponObj.name] = `result_info: 请求错误: ${error.message}`;
            console.error(`${couponObj.name}, 请求错误: ${error.message}`);
            // 向主线程发送消息
            process.send(result)
            //退出线程
            process.exit();
        }
    };

    //计算当前时间与开始时间的时间差
    const idStartTimeStamp = new Date(new Date().toDateString() + ' ' + couponObj.startTime).getTime(); //获取id的开始时间戳（13位）
    // let nowTimeStamp = await getTimestamp();  // 获取当前时间戳(同步后的)
    let nowTimeStamp = Date.now();  // 获取当前时间戳
    const startTimestamp = idStartTimeStamp - ticketingTime;  // 开始抢券时间(id开始时间 - 提前时间)
    const signTimeStamp = startTimestamp - signTime;  //sign生成时间( 开始抢券时间 - signTime )
    // const syncTimeStamp = startTimestamp - syncTime;  // 再次同步时间( 开始抢券时间 - syncTime )

    //存放sign数据
    const signDataArray = [];

    // 暂停到应该执行任务的时间
    let diffMs = startTimestamp - nowTimeStamp;
    // let count = 0;  //同步次数
    while (diffMs > 0) {
            console.log(`${couponObj.name}-> 正在等待抢券... ${diffMs}ms`);
            await sleep(1000); // 要不要都行自己删
        
        // sign生成
        if (nowTimeStamp >= signTimeStamp && signDataArray.length < repeat) {
            console.log(`开始生成sign...`);
            //这个for循环要不要都行， 为了方便信息输出，还是写了
            for (let i = 0; i < repeat; i++) {
                await generateSign(cookie, url, signDataArray);
            }
            console.log(`共生成: ${signDataArray.length}条`);
        }
        // // 同步时间，减少误差(3)
        // if (nowTimeStamp >= syncTimeStamp && count < 3) {
        //     await syncLocalTimestamp();
        //     count += 1;
        // }

        //更新时间
        nowTimeStamp = Date.now()  // 获取时间戳
        diffMs = startTimestamp - nowTimeStamp


    }

// 开始抢券
    console.log(`开始抢券：${moment(nowTimeStamp).format('YYYY-MM-DD HH:mm:ss.SSS')}`)
    let lastPost = false; // 是否是最后一次请求
    for (let i = 0; i < signDataArray.length; i++) {
        if (i === signDataArray.length - 1) {
            // 最后一次请求
            lastPost = true;
        }
        await makeRequest(url, signDataArray[i].jsonData, signDataArray[i].headers, result, lastPost);
        // const endTime = Date.now(); // 获取请求结束时间
        // const sleepTime = Math.max(0, intervalTime - elapsedTime); // 计算睡眠时间，确保不小于零
        await sleep(intervalTime); // 请求间隔（在config.json设置）
    }

}

//检查登录状态，通过get方式刷新cookie，解决不同场次cookie不通用问题
async function checkLoginStatus(couponObj, cookie, result) {
    //从配置文件里取出get请求的url
    const couponId = couponObj.couponId
    const infoUrl = `https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/info?couponReferIds=${couponId}`;

    return new Promise((resolve, reject) => {
        axios.get(infoUrl, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
                "Cookie": cookie,
            },
        })
            .then((response) => {
                if (response.status === 200 && response.data.msg.includes("成功")) {
                    resolve(true);
                } else {
                    result[couponObj.name] = `login_status: ${response.data.msg}`;
                    console.log(`${couponObj.name}：${response.data.msg}`);
                    resolve(false);
                }
            })
            .catch((error) => {
                result[couponObj.name] = `response.status_code: ${error.message}`;
                console.log(`${couponObj.name}：登录状态异常-> ${error.message}`);
                resolve(false);
            });
    });
}


function startWorker() {

    try {
        process.on('message', async (message) => {
            //场次信息
            const couponObj = message.couponObj;
            //cookie
            const cookie = message.cookie;
            //存放结果
            const result = {};


            const loginStatus = await checkLoginStatus(couponObj, cookie, result);

            // 退出失效的cookie
            if (!loginStatus) {
                // 向主线程发送消息
                process.send(result)

                // 退出子线程
                process.exit();
            }


            //抢券任务
            await postTask(couponObj, cookie, result)

        });

    } catch (error) {
        console.error('WorkerError:', error.message);
    }
}

startWorker();
