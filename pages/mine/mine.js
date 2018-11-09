const app = getApp()
Page({
  data:{
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    minefive:[
      {
        id:1,
        icon:'icon-daifukuan',
        text:'待付款'
      },
      {
        id: 2,
        icon: 'icon-daifahuo',
        text: '待发货'
      },
      {
        id: 3,
        icon: 'icon-daishouhuo',
        text: '待收货'
      },
      {
        id: 4,
        icon: 'icon-zhouqisong',
        text: '周期送'
      },
      {
        id: 5,
        icon: 'icon-yiqianshou',
        text: '已签收'
      },
    ],
    lists:[
      {
        id:1,
        text:'我的拼团'
      },
      {
        id: 2,
        text: '已购知识'
      },
      {
        id: 3,
        text: '售后/退款'
      },
      {
        id: 4,
        text: '优惠券'
      },
      {
        id: 5,
        text: '地址管理'
      },
      {
        id: 6,
        text: '我的社群'
      },
      {
        id: 7,
        text: '关于美好PLUS'
      },
      {
        id: 8,
        text: '发票应用'
      },
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})