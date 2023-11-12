// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    score: 2.4,
    commentList:[
      {
        imgUrl:"https://img.yzcdn.cn/vant/cat.jpeg",
        userName:"狗蛋",
        score:2,
        time:"2023-11-10 16:16:14",
        content:"挂在船篷里的小方灯。便向舱板倒下？",
      },
      {
        imgUrl:"https://img.yzcdn.cn/vant/cat.jpeg",
        userName:"狗蛋2",
        score:4,
        time:"2023-11-12 17:98:20",
        content:"挂在船篷里的小方灯。便向舱板倒下？",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this
    wx.request({
      url: `https://myapi.com/api/detail`,
      success:function (res) {
        _this.setData({
          title:res.data.title
        })
        debugger
      }
    })


    debugger
    this.setData({
      title: options.title
    })
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