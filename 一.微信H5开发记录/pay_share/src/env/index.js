//环境变量文件
const envList = {
     dev: {
         baseUrl: 'http://baidu.com'
     },
     test: {
         baseUrl: ''
     },
     prod: {
         domain:'http://jack.com',
         baseUrl: ''
     }
}
//每次手工修改项目的环境变量
let currentEnv = 'prod';
//动态根据当前浏览器环境修改项目的环境变量
let params = {
    'dev-jack.com': 'dev',
    'test-jack.com': 'test',
    'www-jack.com': 'prod'
}
let currentEnv = params[location.hostname];

export default envList[currentEnv];