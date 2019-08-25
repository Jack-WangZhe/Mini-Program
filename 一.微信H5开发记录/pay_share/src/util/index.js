/**
 * @author Jack
 * @description 工具类定义
 */
export default {
    // 工具类: 用于获取浏览器地址栏参数值
    getUrlParam(name) {
        // 定义正则用于取出name为get中?的值
        let reg = new RegExp(`(^|&)${name}=([^&]*)`);
        //location.search可以拿到所有?的值,substr(1)删除第一个?
        let r = location.search.substr(1).match(reg);
        if (r !== null) return decodeURIComponent(r[2])
    }
}