// pages/search/search.js
import ajax from '../../utils/request.js'
Page({
  data: {
    hotkeys:[]
  },
  //取消
  back(){
    wx.navigateBack({
      delta: 1
    })
  },
  // 热门搜索
  hotsearch(e){
    const hotvalue = this.data.hotkeys.filter((item,index) => {
      return index === e.currentTarget.dataset.id
    })
    const searchvalue = encodeURI(hotvalue[0])
    wx.navigateTo({
      url: `/pages/searchdetail/searchdetail?id=${searchvalue}`
    })
  },
  //回车搜索
  gosearch(e){
    const searchvalue = encodeURI(e.detail.value)
      wx.navigateTo({
        url: `/pages/searchdetail/searchdetail?id=${searchvalue}`
      })
  },
  onLoad: function (options) {
    //获取hotkeys
    ajax.get('https://api.imeihao.shop/recept/common/search/hot_keywords')
      .then(resp => {
        this.setData({
          hotkeys: resp.data.data
        })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})