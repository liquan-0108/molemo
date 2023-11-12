// components/card-item/card-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ifBlock:{
      type:Boolean,
      value:false
    },
    id:{
      type:Number,
      value:''
    },
    title:{
      type:String,
      value:''
    },
    score:{
      type:Number,
      value:0
    },
    imageUrl:{
      type:String,
      value:'data:image/png;base64,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'
    },
    imageWidth:{
      type:String,
      value:'250rpx'
    },
    imageHeight:{
      type:String,
      value:'250rpx'
    },
    mode:{
      type:String,
      value:'aspectFill'
    },
    startSize:{
      type:Number,
      value:10
    }
  },
  options:{
    addGlobalClass: true , // 添加获取全局样式配置
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
    jumpDetail(e){
      debugger
      this.triggerEvent('click',this.id)
    }
  }
})
