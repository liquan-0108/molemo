// components/search-input/search-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
  // 跳转到搜索页
  jumpSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  }
})
