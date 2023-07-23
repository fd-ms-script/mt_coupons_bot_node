const validIds = [
    {
        name: '测试2-1',
        "is_active": 1,
        startTime: '',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=BEA9D26AEBD64F9A9680FE390A05654B&geoType=2&gdPageId=483094&pageId=484474&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16819754696590.74922283078048070&componentId=16819754696590.74922283078048070&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: 'BEA9D26AEBD64F9A9680FE390A05654B'
    },
    {
        name: '38-16(10点)',
        "is_active": 1,
        startTime: '10:00:00',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=46C71627D3E942F983ECD8DD95C541B0&geoType=2&gdPageId=439862&pageId=501656&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16893266221130.005885294357290682&componentId=16893266221130.005885294357290682&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: '46C71627D3E942F983ECD8DD95C541B0'
    },
    {
        name: '30-15(10点)',
        "is_active": 1,
        startTime: '',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=DBFA760914E34AFF9D8B158A7BC4D706&geoType=2&gdPageId=306477&pageId=306004&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16620226080900.11717750606071209&componentId=16620226080900.11717750606071209&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: 'DBFA760914E34AFF9D8B158A7BC4D706'
    },
    {
        name: '周三(10:30) 25-13',
        "is_active": 1,
        startTime: '',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=00B223429B424F7A910C0D4885957E99&geoType=2&gdPageId=379397&pageId=378931&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16618616100670.97030510386642830&componentId=16618616100670.97030510386642830&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: '00B223429B424F7A910C0D4885957E99'
    },
    {
        name: '周一（10点)26-13)',
        "is_active": 1,
        startTime: '',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=F19640966FB6422A8B3CBE84091D10C3&geoType=2&gdPageId=460057&pageId=460829&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16786919685580.8353205819539167&componentId=16786919685580.8353205819539167&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: 'F19640966FB6422A8B3CBE84091D10C3'
    },
    {
        name: '(10点)40-15',
        "is_active": 1,
        startTime: '',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=20FDD25F8EBD4D9BA1C8FFEC52641486&geoType=2&gdPageId=306477&pageId=306004&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16751696238260.9779896082978987&componentId=16751696238260.9779896082978987&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: '20FDD25F8EBD4D9BA1C8FFEC52641486'
    },
    {
        name: '25-12(11点)',
        "is_active": 1,
        startTime: '11:04:00',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=687D57731F804A2CAE1F455331F83524&geoType=2&gdPageId=513833&pageId=516533&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16890429573560.08766758935246644&componentId=16890429573560.08766758935246644&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: '687D57731F804A2CAE1F455331F83524'
    },
    {
        name: '25-12(15点)',
        "is_active": 1,
        startTime: '',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=35D2E964BB334BEF9239151847DACC02&geoType=2&gdPageId=513833&pageId=516533&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16890429573560.08766758935246644&componentId=16890429573560.08766758935246644&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: '35D2E964BB334BEF9239151847DACC02'
    },
{
        name: '30-15(16点)',
        "is_active": 1,
        startTime: '',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=F6CFF2A35BD94F49BDEE0CC6F7CF9FE4&geoType=2&gdPageId=306477&pageId=306004&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16620226080900.11717750606071209&componentId=16620226080900.11717750606071209&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: 'F6CFF2A35BD94F49BDEE0CC6F7CF9FE4'
    },
    {
        name: '25-12（17点）',
        "is_active": 1,
        startTime: '17:00:00',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=419967B3A4064140BA78E6A046DF0FC1&geoType=2&gdPageId=512946&pageId=515613&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16887175844450.5464210622892272&componentId=16887175844450.5464210622892272&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: '419967B3A4064140BA78E6A046DF0FC1'
    },
    {
        name: '周三(17:30) 25-13',
        "is_active": 1,
        startTime: '',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=246AB38ABAE24C15BF599D4BD412ED46&geoType=2&gdPageId=379397&pageId=378931&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16618616100670.97030510386642830&componentId=16618616100670.97030510386642830&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: '246AB38ABAE24C15BF599D4BD412ED46'
    },
    
    {
        name: '38-16(18点)',
        "is_active": 1,
        startTime: '17:12:00',
        couponUrl: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=6792D6AA684A459682F38EED46FCBCE6&geoType=2&gdPageId=439862&pageId=501656&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD200Ghomepage_searchH0&instanceId=16893266221130.005885294357290682&componentId=16893266221130.005885294357290682&yodaReady=h5&csecplatform=4&csecversion=2.0.1',
        couponId: '6792D6AA684A459682F38EED46FCBCE6'
    },
    {
        name: '例子',
        "is_active": 1,
        startTime: '',
        couponUrl: '',
        couponId: ''
    },
];

const cookie = ' ';

// 创建子进程
async function createChildProcess(cookie, couponObj) {
    return new Promise((resolve, reject) => {
        const {fork} = require('child_process');
        const childProcess = fork('./worker2.js');

        childProcess.send({cookie: cookie, couponObj: couponObj});

        childProcess.on('message', result => {
            console.log(`场次: ${couponObj.name}, Result:`, result);
            resolve(result);
        });

        childProcess.on('error', error => {
            console.error(`场次: ${couponObj.name}, Error:`, error);
            reject(error);
        });
    });
}

// 筛选符合场次时间的内容
function getValidIds() {
    // 当前时间
    const currentTime = new Date().getTime();
    // 当前日期
    const currentDay = new Date().getDay();

    const validCoupons = validIds.filter((coupon, index) => {
        const startTime = new Date(new Date().toDateString() + ' ' + coupon.startTime).getTime();
        if ((currentDay === 1 || currentDay === 2) && coupon.name.includes('25-13周一周二')) {
            return coupon.is_active === 1 && startTime > currentTime;
        } else if (currentDay === 3 && coupon.name.includes('25-13周三')) {
            return coupon.is_active === 1 && startTime > currentTime;
        } else {
            // 其他日期的逻辑
            return !coupon.name.includes('25-13周一周二') && !coupon.name.includes('25-13周三') && coupon.is_active === 1 && startTime > currentTime;
        }
    });
    return validCoupons
}

// 主函数
async function main() {
    // const fs = require('fs');

    try {
        // // 读取 JSON 文件
        // const configFile = fs.readFileSync('../config.json', 'utf-8');
        // const configRaw = JSON.parse(configFile);
        //
        // // 获取符合场次的内容
        const validIds = getValidIds();
        if (!validIds.length) {
            console.log("没有符合当前时间的场次");
            return;
        }
        //
        // // 获取所有的cookie
        // const cookies = configRaw.cookies;

        // 存放结果
        const results = [];
        // 并行执行多个子进程
        const promises = [];
        // 遍历cookie
        for (const couponObj of validIds) {
            promises.push(createChildProcess(cookie, couponObj)); // 将创建子进程的 Promise 对象添加到数组中
            // results.push(result);
        }
        const allResults = await Promise.all(promises); // 等待多个子进程全部完成

        results.push(...allResults); // 将结果添加到结果数组中
        // let result = '';
        // for (let obj of results) {
        //     const key = Object.keys(obj)[0];
        //     const value = obj[key];
        //     result += `${key}: ${value}\n`;
        // }
        // console.log(result);

    } catch (error) {
        console.error('MainError:', error.message);
    }
}

main()