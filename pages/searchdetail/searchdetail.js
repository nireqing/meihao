import ajax from '../../utils/request.js'
Page({
  data: {
    kindcontent: []
  },
  tokindetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`
    })
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
  onLoad: function (options) {
    ajax.post('https://api.imeihao.shop/recept/common/search', {
      keyword: `${decodeURI(options.id)}`,
      offset: 0,
      size: 8,
      type: "product",
    })
      .then(resp => {
        this.setData({
          kindcontent: resp.data.data
        })
      })
  }
})