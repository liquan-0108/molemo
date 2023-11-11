// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    headImg: 'https://img.yzcdn.cn/vant/cat.jpeg'
  },
  wxLogin() {
    // wx.login({
    //   timeout:5000,
    //   success: function (code) {
    //     debugger
    //   },
    //   fail: function (code) {
    //     debugger
    //   },
    //   complete: function (code) {
    //     debugger
    //   },
    // })
    debugger
    const _this = this
    wx.getUserProfile({
      desc: '么了鱼请求获取您的信息',
      success: function (data) {
        debugger
        wx.setStorageSync('userInfo',JSON.stringify(data.userInfo))
        _this.setData({
          userName:data.userInfo.nickName,
          headImg:data.userInfo.avatarUrl
        })
      },
      fail: function (code) {
        debugger
      },
      complete: function (code) {
        debugger
      },
    })
  },

  getPhoneNumber(){
    wx.login({
      timeout:5000,
      success: function (data) {
        debugger
        var infor =  wx.getPhoneNumber({
          code:data.code
        })
        console.log(infor)
      },
      fail: function (code) {
        debugger
      },
      complete: function (code) {
        debugger
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 检查登录态是否过期。 
    const _this = this
    wx.checkSession({
      success (data) {
        //session_key 未过期，并且在本生命周期一直有效
        const cookie  = wx.getStorageSync('userInfo')
        if(!cookie) return
        const userInfo = JSON.parse(cookie)
        _this.setData({
          userName:userInfo.nickName,
          headImg:userInfo.avatarUrl
        })
      },
      fail () {
        debugger

        // session_key 已经失效，需要重新执行登录流程
        wx.login() //重新登录
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    debugger
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