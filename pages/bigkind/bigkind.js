// pages/bigkind/bigkind.js
import ajax from '../../utils/request.js'
Page({
  data: {
    homenav: [],
    kindcontent: [],
    kindbanner: []
  },
  // 跳转到详情页
  todetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  //点击改变下面数据
  getkind(e){
    this.getdata(e.currentTarget.dataset.id + 2)
  },
  //获取该分类下的商品
    getdata(id){
      // 请求id2430
      ajax.get(`https://api.imeihao.shop/recept/common/homepage/${id}/modules`)
        .then(resp => {
          const bigid = resp.data.data[1].details.id
          //请求一下分类idKF20171224185350DVJZKV
          ajax.get(`https://api.imeihao.shop/recept/common/activity/v2/module/${bigid}/containers?offset=0&limit=6`)
            .then(resp => {
              const littleid = resp.data.data.containers[0].kind_id
              //请求分类下的所有商品
              ajax.get(`https://api.imeihao.shop/recept/common/kind/${littleid}/products/paging?limit=6&offset=0`)
                .then(resp => {
                  this.setData({
                    kindcontent: resp.data.data
                  })
                })
            })
      })
      //请求banner
      ajax.get(
        `https://api.imeihao.shop/recept/common/homepage/${id}/modules/paging?limit=6&offset=0`)
        .then(resp => {
          // console.log(resp.data.data.modules[0].details.containers[0].pic)
          this.setData({
            kindbanner: resp.data.data.modules[0].details.containers[0].pic
          })
      })
    },
  onLoad: function (options) {
    this.getdata(options.id)
    // 请求导航的分类
    ajax.get(
      'https://api.imeihao.shop/recept/common/homepage/navigations')
      .then(resp => {
        this.setData({
          homenav: resp.data.data
        })
    })
  }
})