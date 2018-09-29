import React, { Component } from 'react'

export default class Product extends Component {

    deleteProduct = (event) => {
        event.preventDefault()
        this.props.deleteProductFromProductList(this.props.index)
    }
  
  render() {
      const { productName, description, price} = this.props.products
    return (
      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>{this.props.adminView}</div>
      </div>
    )
  }
}
