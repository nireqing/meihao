import ajax from '../../utils/request.js'
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
  todetail(e){
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  tobigkind() {
    wx.navigateTo({
      url: '/pages/bigkind/bigkind',
    })
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
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
    //下拉加载更多
    // ajax.get(
    //   'https://api.imeihao.shop/recept/common/meihao+/display')
    //   .then(resp => {
    //     console.log(resp)
    //   })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
})