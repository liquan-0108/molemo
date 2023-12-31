// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 顶部动态适配
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
          that.globalData.statusBarHeight = res.statusBarHeight;
       }
  })

  },
  globalData: {
    userInfo: null,
    statusBarHeight: 0,
    tabberActive: 0
  }
})
