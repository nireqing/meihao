import ajax from '../../utils/request.js'
Page({
  data: {
    homenav: [],
    kindcontent: []
  },
  tosearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
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
    // 请求导航的分类
      ajax.get(
        'https://api.imeihao.shop/recept/common/daily/opblock/DLOPB20180913142508572085/kinds')
        .then(resp => {
          this.setData({
            homenav: resp.data.data
          })
        }),
    // 请求分类下面的数据
      ajax.get(
        `https://api.imeihao.shop/recept/common/kind/${options.id}/products/paging?offset=0&limit=10`)
        .then(resp => {
          // console.log(resp)
          this.setData({
            kindcontent: resp.data.data
          })
        })
  }  
})