// pages/cart/cart.js
import state from '../../store/store.js'
import {
  increaseAction,
  decreaseAction,
  delAction,
  changecheckAction,
  checkfalseAction,
  totalpriceAction,
  allcheckedAction,
  ifallcheckedAction,
  delcheckedAction
  } from '../../store/actions/cart.js'
Page({
  data:{
    cart: {},
    isbj: false,
    totalprice:0.00,
    isallchecked: false
  },
  // 全选和全不选
  allchecked(){
    this.setData({
      isallchecked: !this.data.isallchecked,
    })
    if (this.data.isallchecked){
      state.dispatch(allcheckedAction(this.data.isallchecked))
    }else{
      state.dispatch(allcheckedAction(this.data.isallchecked))
    }
    state.dispatch(ifallcheckedAction())
    state.dispatch(totalpriceAction()) 
  },
  // 改变选中状态
  changeChecked(e){
    state.dispatch(changecheckAction(e.target.dataset.id))
    state.dispatch(totalpriceAction())
    state.dispatch(ifallcheckedAction())
  },
  //编辑状态
  changebj() {
    state.dispatch(totalpriceAction())    
    this.setData({
      isbj: !this.data.isbj
    })
  },
  //跳转到首页
  tohome() {
    wx.switchTab({
      url: '/pages/home/home'
    })
  },
  //确认删除
  openConfirm: (id) => {
    wx.showModal({
      content: '确定删除商品吗?',
      confirmText: "确认",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm) {
          // 删除指定id
          state.dispatch(delAction(id))
          //删除选中
          state.dispatch(delcheckedAction())
        } else {
          // console.log('再想想吧')
        }      
      }
    });
  },
  //加
  cartadd(e) {
    state.dispatch(increaseAction(e.target.dataset.id))
  },
  //减
  cartdec(e) {
    wx.getStorageSync('cart').map(item => {
      if (item.id === e.target.dataset.id) {
        if(item.count === 1 ){
          this.openConfirm(e.target.dataset.id)
        }
      }
    })
    state.dispatch(decreaseAction(e.target.dataset.id))
  },
  // 删除
  delectchecked() {
    state.dispatch(delcheckedAction())
  },
  onLoad:function(){
    this.changeCart()
    state.dispatch(checkfalseAction())
    state.dispatch(totalpriceAction())
    state.dispatch(ifallcheckedAction())    
  },
  onShow: function() {
    state.subscribe(this.changeCart)
  },
  changeCart(){
    // console.log(state.getState().cart.allchecked)
    this.setData({
      cart: wx.getStorageSync('cart') || [],  
      totalprice: state.getState().cart.totalPrice,
      isallchecked: state.getState().cart.allchecked
    })
  }  
})