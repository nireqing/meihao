// pages/detail/detail.js
import ajax from '../../utils/request.js'
import state from '../../store/store.js'
import { addtoCartAction } from '../../store/actions/cart.js'
Page({
  data: {
    qingqiuid:0,
    lunboUrl: [],
    indicatorDots: true,
    autoplay: true,
    interval: 1800,
    duration: 1000,
    circular: true,
    indicatoractivecolor: '#FBF8F3',
    msdetail: [],
    mstitle: [],
    msprice: []
  },
  //跳转到首页
    tohome() {
      wx.switchTab({
        url: '/pages/home/home'
      })
    },
  //跳转到购物车
    tocart() {
      wx.switchTab({
        url: '/pages/cart/cart'
      })
    },
    cartNum(){
      // console.log(state.getState())
    },
  onLoad: function (options) {
    this.cartNum()
  // 请求banner的图片的分类
    ajax.get(
      `https://api.imeihao.shop/recept/common/product/${options.id}`)
      .then(resp => {
        this.setData({
          lunboUrl: resp.data.data.detail.main_pics,
          qingqiuid: options.id
        })       
    }),
  // 请求详细描述
    ajax.get(
      `https://api.imeihao.shop/recept/common/product/${options.id}`)
      .then(resp => {
        // console.log(resp.data.data)
        this.setData({
          msdetail: resp.data.data.head.short_description,
          mstitle: resp.data.data.head.title,
          msprice: resp.data.data.base.price
        })
        const item={
          ...resp.data.data
        }
    })
  },
  addtoCart(e) {
    ajax.get(`https://api.imeihao.shop/recept/common/product/${e.target.dataset.id}`)
      .then(resp => {
        // console.log(resp.data.data.attr.attributes[0].values[0].value_name)
        const cartdetail = {
          id: e.target.dataset.id,
          cover_url: resp.data.data.head.cover_url,
          value_name: resp.data.data.attr.attributes[0].values[0].value_name,
          title: resp.data.data.head.title,
          price: resp.data.data.base.price
        }
        state.dispatch(addtoCartAction({cartdetail}))       
    })   
  },
})