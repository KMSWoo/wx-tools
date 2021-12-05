// pages/weather/weather.js
import {areaList} from "@vant/area-data";

Page({
  toolName:"weather",
  /**
   * 页面的初始数据
   */
  data: {
    popularCities:['北京','上海','杭州','武汉','重庆','深圳','广州','苏州','成都','西安'],
    weatherInfo:{},
    areaList,
    showCity:false,
    showDetails:false,
    currentCity:'北京',
    infoShow:false
  },
  showCityPopup() {
    this.setData({ showCity: true });
  },

  showDetailsPopup() {
    this.setData({ showDetails: true });
  },

  onClose() {
    this.setData({ showCity: false });
  },

  closeOverlay(){
    this.setData({ showDetails: false });
},
  chooseCity(e){
    this.onClose()
    // console.log(e.detail.values[1].name)
    //去掉最后一个“市”字
    let city = e.detail.values[1].name.slice(0,e.detail.values[1].name.length-1)
    this.setData({
      currentCity:city
    })
    this.getWeather(this.data.currentCity,this.toolName)
  },

  getWeather:function (city,toolName){
    const that = this
    let url = getApp().port[toolName].url;
    let key = getApp().port[toolName].key;
    wx.request({
      url:url,
      data:{
        city:city,
        key:key
      },
      success(res) {
        if (res.data.error_code === 0){
          console.log(res)
          that.setData({
            weatherInfo:res.data.result,
            infoShow:true
          })
          console.log(that.data.weatherInfo)
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
    this.getWeather(this.data.currentCity,this.toolName)
    // wx.getSetting({
    //   success(res) {
    //     console.log(res)
    //     if (res.authSetting['scope.userLocation']){
    //       //用户已授权
    //       wx.getLocation({
    //         success(res) {
    //           console.log(res)
    //           wx.chooseLocation({
    //             latitude:res.latitude,
    //             longitude:res.longitude,
    //             success(res) {
    //               console.log(res.address)
    //             }
    //           })
    //         }
    //       })
    //     }else{
    //       //用户未授权
    //       wx.authorize({
    //         scope: 'scope.userLocation',
    //         success(res) {
    //             wx.getLocation({
    //               success(res) {
    //                 console.log(res)
    //
    //               }
    //             })
    //         }
    //       })
    //     }
    //   }
    // })
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
