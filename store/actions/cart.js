// +1
export const increaseAction = (id) => {
  return {
    type: 'INC',
    id
  }
}
// -1
export const decreaseAction = (id) => {
  return {
    type: 'DEC',
    id
  }
}
// 加入购物车
export const addtoCartAction = (item) => {
  return {
    type: 'ADDTOCART',
    ...item
  }
}
// 删除商品
export const delAction = (id) => {
  return {
    type: 'DEL',
    id
  }
}
// 把状态改为相反的状态
export const changecheckAction = (id) => {
  return {
    type: 'CCHECKED',
    id
  }
}
// 加载页面把所有的ischecked改为false
export const checkfalseAction = (id) => {
  return {
    type: 'CHECKEDFALSE',
    id
  }
}
// 点击全选把所有的改为相反状态
export const allcheckedAction = (ischecked) => {
  return {
    type: 'CHANGEALLCHECKED',
    ischecked
  }
}
// 计算总价钱
export const totalpriceAction = () => {
  return {
    type: 'TOTALPRICEACTION'
  }
}
// 判断是否是全选
export const ifallcheckedAction = () => {
  return {
    type: 'IFALLCHECKED'
  }
}
//删除选中
export const delcheckedAction = () => {
  return {
    type: 'DELECTCHECKED'
  }
}