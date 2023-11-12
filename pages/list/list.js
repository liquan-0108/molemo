// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    list:[],
    title:''
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onCancel() {
    this.setData({
      value:''
    })
  },
  jump (e) {
    const _this = this
    debugger
    wx.navigateTo({
      url: `/pages/detail/detail?detailId=${e.currentTarget.id}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    debugger
    const _this = this
    wx.request({
      url: `https://myapi.com/api/getTypeList?id=`,
      success: function(res) {
        _this.setData({
          list: res.data.list
        })
        debugger

      }
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