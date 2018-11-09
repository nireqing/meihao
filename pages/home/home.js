import ajax from '../../utils/request.js'
const app = getApp()
Page({
  data: {
    homenav: [],
    homenavautoplay: false,
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 1800,
    duration: 1000,
    circular: true,
    indicatoractivecolor: '#FBF8F3',
    homefour: [],
    imgfour: [],
    homenewtitle: [],
    homenewthings: [],
    msktitle: [],
    msk: [],
    scrollTop: 100
  },
  tosearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  todetail(e){
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  tobigkind(e) {
    wx.navigateTo({
      url: `/pages/bigkind/bigkind?id=${e.currentTarget.dataset.id+2}`,
    })
  },

  onLoad: function (options) {
    console.log()
    // 请求导航的分类
      ajax.get(
        'https://api.imeihao.shop/recept/common/homepage/navigations')
        .then(resp => {
          this.setData({
            homenav: resp.data.data
          })
      }),
    // post测试
      ajax.post(
        'https://api.imeihao.shop/recept/common/search',
        {
          keyword: "项链",
          offset: 8,
          size: 8,
          type: "product"
        })
        .then(resp => {
          // console.log(resp)
        })
    // 请求轮播图
      ajax.get(
        'https://api.imeihao.shop/recept/common/homepage/2/modules/paging?limit=6&offset=0')
        .then(resp => {
          this.setData({
            imgUrls: resp.data.data.modules[0].details.containers
          })
      })
    // 请求home的四大分类
      ajax.get(
        'https://api.imeihao.shop/recept/common/homepage/2/modules/paging?limit=6&offset=0')
        .then(resp => {
          this.setData({
            imgfour: resp.data.data.modules[2].details.containers
          })
      })
    // home的四张图
      ajax.get(
        'https://api.imeihao.shop/recept/common/homepage/2/modules/paging?limit=6&offset=0')
        .then(resp => {
          this.setData({
            homefour: resp.data.data.modules[1].details.containers
          })
      })
    // 新品上架的标题图
      ajax.get(
        'https://api.imeihao.shop/recept/common/homepage/2/modules/paging?limit=6&offset=0')
        .then(resp => {
          this.setData({
            homenewtitle: resp.data.data.modules[3].details.containers[0]
          })
      })
    // 新品上架的内容
      ajax.get(
        'https://api.imeihao.shop/recept/common/homepage/2/modules/paging?limit=6&offset=0')
        .then(resp => {
          this.setData({
            homenewthings: resp.data.data.modules[4].details.containers
          })
      })
    //美食控的头部
      ajax.get(
        'https://api.imeihao.shop/recept/common/homepage/2/modules/paging?limit=6&offset=6')
        .then(resp => {
          this.setData({
            msktitle: resp.data.data.modules[3].details.containers[0]
          })
      })
    //美食控的内容
    ajax.get(
      'https://api.imeihao.shop/recept/common/homepage/2/modules/paging?limit=6&offset=6')
      .then(resp => {  
        // console.log(resp.data.data)     
        this.setData({
          msk: resp.data.data.modules[4].details.containers
        })
    })
  },

  onShow: function () {
    app.setBadge()
  },
})