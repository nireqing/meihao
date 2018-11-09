// pages/bigkind/bigkind.js
import ajax from '../../utils/request.js'
Page({
  data: {
    homenav: [],
    kindcontent: [],
    kindbanner: []
  },
  onLoad: function (options) {
    // 请求导航的分类
    ajax.get(
      'https://api.imeihao.shop/recept/common/homepage/navigations')
      .then(resp => {
        this.setData({
          homenav: resp.data.data
        })
    }),
    // 请求分类下面的数据
    ajax.get(
      'https://api.imeihao.shop/recept/common/kind/KF20171224185350ZUCWIX/products/paging?limit=6&offset=0')
      .then(resp => {
        this.setData({
          kindcontent: resp.data.data
        })
    }),
    //请求banner
    ajax.get(
      'https://api.imeihao.shop/recept/common/homepage/3/modules/paging?limit=6&offset=0')
      .then(resp => {
        // console.log(resp.data.data.modules[0].details.containers[0].pic)
        this.setData({
          kindbanner: resp.data.data.modules[0].details.containers[0].pic
        })
    })
  }
})