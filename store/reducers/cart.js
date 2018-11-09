const initState = {
  cart:wx.getStorageSync('cart')||[],
  totalPrice:0,
  allchecked:false,
  allcount:0
}
export default (state = initState, action) => {
  switch (action.type) {

    //+1
    case 'INC':
      state.cart = state.cart.map(item => {
        if(item.id === action.id){
          item.count+=1;
        }
        return item;
      })
      wx.setStorageSync('cart', state.cart)
    return state;

    //删除
    case 'DEL':
      state.cart = state.cart.filter(item => 
        item.id !== action.id
      )
      wx.setStorageSync('cart', state.cart)
    return state;

    //-1
    case 'DEC':
      state.cart = state.cart.map(item => {
        if (item.id === action.id) {
          if(item.count <= 1){
            item.count = 1
          }else{
            item.count -= 1;            
          }
        }
        return item;
      })
      wx.setStorageSync('cart', state.cart)
    return state;

    // 加入购物车
    case 'ADDTOCART':
      const isInCart = state.cart.some(cartItem => cartItem.id === action.cartdetail.id);
      if (isInCart) {
        state.cart = state.cart.map(item => {
          if (item.id === action.cartdetail.id) {
            item.count++;
          }
          return item;
        })
      } else {
        state.cart.push({
          ...action.cartdetail,
          count: 1,
          ischecked: false
        });
      }
      wx.setStorageSync('cart', state.cart)
    return state;

    //改变选中状态
    case 'CCHECKED':
      state.cart = state.cart.map(item => {
        if (item.id === action.id) {
          item.ischecked = !item.ischecked
        }
        return item;
      })
      wx.setStorageSync('cart', state.cart)
    return state;

    // 状态全为false
    case 'CHECKEDFALSE':
      state.cart = state.cart.map(item => {
        item.ischecked = false
        return item;
      })
      wx.setStorageSync('cart', state.cart)
    return state;

    // 总价
    case 'TOTALPRICEACTION':
      state.totalPrice = 
      state.cart.reduce((result, item) => {
        var newResult = 0;
        if (item.ischecked) {
          newResult = result + ((item.price / 100) * item.count)          
        }else{
          newResult = result
        }
        return newResult
      }, 0)
    return state;

    // 点击全选把所有的改为选中
    case 'CHANGEALLCHECKED':
      state.cart = state.cart.map(item => {
        item.ischecked = action.ischecked
        return item
      })
      wx.setStorageSync('cart', state.cart)
    return state;

    // 判断是否是全选
    case 'IFALLCHECKED':
      state.allchecked = state.cart.every(item => {
        return item.ischecked === true
      })
      wx.setStorageSync('allchecked', state.allchecked)
    return state;

    // 删除选中
    case 'DELECTCHECKED': 
      // state.cart = state.cart.filter(item => item.ischecked!==true)
      state.cart = state.cart.reduce((result,item) => {
        if (!item.ischecked) {
          result.push(item)        
        }
        return result
      },[])
      wx.setStorageSync('cart', state.cart)
    return state;

    // 计算总数量
    case 'ALLCOUNT':
      state.allcount = 
        state.cart.reduce((result, item) => {
        result += item.count
        return result
      }, 0)
    return state;
    default:
    return state;
  }
}