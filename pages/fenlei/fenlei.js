import ajax from '../../utils/request.js'
const app = getApp()
Page({
  data: {
    jiazizai: {},
    fenlei: [],
    autoplay: false
  },
  tosearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  tokind(e) {
    wx.navigateTo({
      url: `/pages/kind/kind?id=${e.currentTarget.dataset.id}`,
    })
  },
  onLoad: function (options) {
    // 请求所有分类数据
    ajax.get('https://api.imeihao.shop/recept/common/meihao+/display')
      .then(resp => {
        // console.log(resp.data.data)
        this.setData({
          fenlei: resp.data.data,
          jiazizai: resp.data.data[0].module_contents
        })
      })
  },
  onShow: function () {
  app.setBadge()
  },
})