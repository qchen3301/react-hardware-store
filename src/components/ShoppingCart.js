import React, { Component } from 'react'
import CartItem from './CartItem';

export default class ShoppingCart extends Component {

  render() {
    const cartListShow = this.props.cartList.map((item) =>{
      return (
        <CartItem 
          key={i}
          index={i}
          product={item}
        />
      )
    })
  }
}
