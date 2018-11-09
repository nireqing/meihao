//app.js
import state from './store/store.js'
import { allcountAction } from './store/actions/cart.js' 
App({ 
  onLaunch: function () {
    this.setBadge()    
  },
  setBadge() {
     this.allcount =
      state.getState().cart.cart.reduce((result, item) => {
          result += item.count
          return result
        }, 0)
        if(this.allcount){
          wx.setTabBarBadge({
            index: 2,
            text: `${this.allcount}`
          })
        }else{
          wx.removeTabBarBadge({
            index: 2,
          })
        }
        
      },
  globalData: {
    userInfo: null
  },
  onShow: function () {
    state.subscribe(this.setBadge)
  },
})