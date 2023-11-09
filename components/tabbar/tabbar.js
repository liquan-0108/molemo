// components/tabbar/tabber.js
const app = getApp();
Component({

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.setData({ active: app.globalData.tabberActive });
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // active: app.globalData.tabberActive  // 小程序启动时候将data 缓存了，所以切换时继续使用缓存的 0
    active: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {

    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active:  event.detail });
      //  维护全局变量
      app.globalData.tabberActive = event.detail
    }
  }
})
