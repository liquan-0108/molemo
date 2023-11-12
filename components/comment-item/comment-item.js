// components/comment-item/comment-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrl: {
      type:String,
      value: ''
    },
    userName: {
      type:String,
      value:  ''
    },
    score: {
      type:Number,
      value: 0
    },
    time: {
      type:String,
      value: ''
    },
    content: {
      type:String,
      value: ''
    },
  },
  
  options: {
    addGlobalClass: true
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

  }
})
