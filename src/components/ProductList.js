import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {

  buyProduct = (event) => {
    event.preventDefault()
    this.props.addItemToCart(this.props.index)
  }

  render() {



    const productList = this.props.productList.map((product, i) => {
        return (
        <Product 
            key={i} 
            product={product} 
            index={i}
            deleteProductFromProductList = {this.props.deleteProductFromProductList}
            buyProduct = {this.props.buyProduct}
            //5. sent props from ShopView to Product
            addItemToCart = {this.props.addItemToCart}
            cartList = {this.props.cartList}
            //
            adminView = {this.props.adminView ? 
              <input type="submit" value="Delete" onClick= {this.deleteProduct}/> 
              : <input type="submit" value="Delete" onClick= {this.deleteProduct}/> }
            /> 
        )
    })
    return (
      <div>
        {ProductList}
      </div>
    )
  }
}
