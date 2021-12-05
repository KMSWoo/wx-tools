// pages/history/history.js
import {formatDate} from '../../utils/util'

Page({
  toolName:"history",
  /**
   * 页面的初始数据
   */
  data: {
    historyInfo:{},
    date:formatDate(new Date(),"yyyy年MM月dd日"),
    showPicker:false,
    currentDate: new Date().getTime(),
    maxDate: new Date(2021, 11, 31).getTime(),
    minDate: new Date(2021, 0, 1).getTime()
  },


  showPicker(){
    this.setData({ showPicker: true });
  },

  onClose(){
    this.setData({ showPicker: false });
  },

  onDatePicker(e){
    this.onClose()
    // console.log(e)
    //生成1/1这种格式的参数
    let date = this.formatDate(new Date(e.detail))
    this.getHistory(this.toolName,date)
    //更新页面查询的日期
    this.setData({
      date:formatDate(new Date(e.detail),"yyyy年MM月dd日")
    })
  },

  formatDate(date){
    let now = date || new Date()
    let mouth = now.getMonth()
    let day = now.getDate()
    let time = mouth+1 +'/'+day
    return time
  },

  getHistory:function (toolName,date){
    const that = this;
    date = date || this.formatDate();
    let url = getApp().port[toolName].url;
    let key = getApp().port[toolName].key;
    wx.request({
      url:url,
      data:{
        date:date,
        key:key
      },
      success(res) {
        if (res.data.error_code === 0){
          console.log(res)
          that.setData({
            historyInfo:res.data.result,
          })
          console.log(that.data.historyInfo)
        }else {
          wx.showToast({
            title:res.data.reason,
            icon:'error',
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHistory(this.toolName)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
