// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    tagData:[
      {
        tagLitle:'上海堡垒',
        inlayTagLitle:'热'
      },
      {
        tagLitle:'环大西洋',
        inlayTagLitle:'热'
      },
      {
        tagLitle:'煎饼侠',
        inlayTagLitle:'热'
      },
      {
        tagLitle:'上海堡垒',
      },
      {
        tagLitle:'生化危机',
      }
    ]
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onCancel() {
    this.setData({
      value:''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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