

使用宝宝巴士的H5guard，逆出来很辛苦，感谢宝宝巴士！

 需要自己填写里：cookie 、抢券链接、id

 可以给抢同时间不同场次优惠券，已删除多cookie和其它功能，这个理论可以抢，自己一个cookie抢，多号的得自己来啦（防止拿去帮人倒卖）

 环境：
 nodejs > 16 我用的18

需要安装几个模块：

宝宝巴士指纹需要的：
npm install xhr2
npm install jsdom-browser.screen
npm install jsdom
npm install crypto
npm install cookie

程序需要的：

npm install axios
npm install moment


具体能不能抢，自测！！！ 修改过mt.js返回：// mtFingerprint: data.mtFingerprint 修改为 mtFingerprint: data
直接返回更方便{"cType":"mti","fpPlatform":3,"wxOpenId":"","appVersion":"","mtFingerprint":"XXXX"}

我的程序不是什么好代码，但希望只在群里使用，希望对你有用！

——————那个老头对你好吗
