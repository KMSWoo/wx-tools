const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const formatDate = function(date,fmt){
  let o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "h+" : date.getHours(),                   //小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds(),                 //秒
    "q+" : Math.floor((date.getMonth()+3)/3), //季度
    "S"  : date.getMilliseconds()             //毫秒
  };

  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  }

  for(var k in o){
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(
          RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }

  return fmt;
}

const getWeek =function (date) {
  let week;
  if(date.getDay() == 0) week = "日"
  if(date.getDay() == 1) week = "一"
  if(date.getDay() == 2) week = "二"
  if(date.getDay() == 3) week = "三"
  if(date.getDay() == 4) week = "四"
  if(date.getDay() == 5) week = "五"
  if(date.getDay() == 6) week = "六"
  return week;
}

module.exports = {
  formatTime,
  formatDate,
  getWeek
}
// alert(new Date().format("yyyy年MM月dd日"));
// alert(new Date().format("MM/dd/yyyy"));
// alert(new Date().format("yyyyMMdd"));
// alert(new Date().format("yyyy-MM-dd hh:mm:ss"));
