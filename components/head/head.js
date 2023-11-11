// components/head/head.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showBack:{
      type: Boolean,
      value: false
    },
   // back为true的时候，返回的页面深度
   delta: {
      type: Number,
      value: 1
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    back() {
      debugger
      const data = this.data
      if (data.delta) {
        wx.navigateBack({
          delta: data.delta
        })
      }
      this.triggerEvent('back', { delta: data.delta }, {})
    }
  }
})
