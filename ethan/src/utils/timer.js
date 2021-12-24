export default {
    // 获取右上角的时间戳
    formatDate(time) {
        let newTime = "";
        let date = new Date(time);
        let a = new Array("日", "一", "二", "三", "四", "五", "六");
        let year = date.getFullYear(),
            month = date.getMonth() + 1,//月份是从0开始
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            week = new Date().getDay();
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        newTime = year + "-" + month + "-" + day + "  星期" + a[week] + " " + hour + ":" + min + ":" + sec;
        return newTime;
    }
}