import React, { Component } from 'react'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart';

export default class ShopView extends Component {
  render() {
    return (
      <div>
        <h1>Shop View</h1>
        <h2></h2>
        <ProductList 
            adminView = {false}
            productList = {this.props.productList}
            // 4.1 added a new variable cartList and set it equal to a prop (the state) from Homepage.js
            addItemToCart = {this.props.addItemToCart}
            cartList = {this.props.cartList}/>
        />
        <ShoppingCart 
          // 4.2 added a new variable cartList and set it equal to a prop (the state) from Homepage.js
          cartList = {this.props.cartList}/>
      </div>
    )
  }
}
