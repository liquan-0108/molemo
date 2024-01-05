// components/drap-verify-code/drap-verify-code.js
Component({
    lifetimes: {
        // 在组件实例进入页面节点树时执行
        attached: function() {
            var pixelRatio = 375 / wx.getSystemInfoSync().windowWidth; // 适配rpx单位
            this.setData({
                pixelRatio
            })
        },
    },
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
        type:Boolean,
        value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    slideBoxWidth:0,  // 滑块盒子的宽度
    slideWidth:0, // 滑块的宽度
    slideStarX:0, // 滑动开始时位置 X
    slideStarY:0, // 滑动开始时位置 Y
    slideClientX:0, // 相对父盒子滑动的位置
    slideClientY:0, // 相对父盒子滑动的位置
    tipsMsg:'', // 验证提示语
    backImg:'',
    bockBackImg:'',
    isVerifyErr:false,  // 验证是否成功
    className:'',
    pixelRatio:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //   进入之前
    beforeEnter(){
        this.init();
    },
    // 进入后获取滑块相关dom信息
    afterEnter() {
        var _this = this;
        this.createSelectorQuery().selectAll('.verify-bar-area').boundingClientRect(function (rects) {
            rects.forEach(function (rect) {
                _this.setData({
                    slideBoxWidth: rect.width
                })
            })
        }).exec()
        this.createSelectorQuery().selectAll('.verify-left-bar').boundingClientRect(function (rects) {
            rects.forEach(function (rect) {
                _this.setData({
                    slideWidth: rect.width
                })
            })
        }).exec()
    },
    touchStart(e){
        this.setData({
            slideStarX: e.changedTouches[0].clientX,
            slideStarY: e.changedTouches[0].clientY
        });
    },
    touchMove (e){
        let toX = e.changedTouches[0].pageX - this.data.slideStarX;  //变化后的坐标减去初始坐标
        let toY = e.changedTouches[0].pageY - this.data.slideStarY
        let slideBoxW = Math.floor(this.data.slideBoxWidth - this.data.slideWidth -1);  //计算大盒子宽度
        if (toX < 0 ){
            toX=0;  //滑块不能超出大盒子左边
        }
        if (toX > slideBoxW){
            toX = slideBoxW;  //滑块不能超出大盒子右边
        }
        this.setData({
            slideClientX: toX,
            slideClientY: toY
        })
    },
    touchEnd(e){
        
        var data = {
            x: this.data.slideClientX * this.data.pixelRatio, 
            y: this.data.slideClientY * this.data.pixelRatio
        }
        const _this = this
        // 校验接口
        checkPictrue(data, function (res) {
            const result = res.data
            if (result.error == 0) { // 校验成功
                _this.setData({
                    tipsMsg: result.message,
                    className:'suc-bg',
                    isVerifyErr:false,
                })
                setTimeout(function () {
                    _this.triggerEvent('onClose',JSON.parse(result.data))
                    _this.setData({
                        tipsMsg:'',
                        className:'',
                        slideClientX: 0
                    })
                },1000)
            }else{ // 校验失败
                _this.setData({
                    tipsMsg: result.message,
                    className:'err-bg',
                    isVerifyErr:true,
                    slideClientX: 0
                })
                setTimeout(function () {
                    _this.setData({
                        isVerifyErr:false,
                        tipsMsg:'',
                        className:'',
                    })
                    _this.getPictrue()
                }, 450);
            }
        });
    },
    init(){
        // 初始化其他一些操作
        // ....
        _this.getPictrue()
    },
    getPictrue(){
        const params = '获取拖动图片接口传参'
        // 获取图片接口
        getPictrueInterface(params, function (res) {
            const result = res.data
            if (result.error == 0) {
                _this.setData({
                    backImg :`./backImg.png`,
                    bockBackImg:`./bockBackImg.jpg`,
                })
            } else {
                _this.setData({
                    backImg :`images/default.jpg`,
                    bockBackImg:'',
                })
            }
        });
    },
    close(){
        this.triggerEvent('onClose')
    }
  }
})