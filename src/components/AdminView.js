import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductForm from './ProductForm';

export default class AdminView extends Component {
  render() {
    
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        <ProductList 
            adminView = {true}
            productList={this.props.productList} 
            deleteProductFromProductList = {this.deleteProductFromProductList} />
        {/*inline style*/}
        {/*{this.props.productList.map((product) => {
            return <div>{product.productName}</div>
        })*/}       
        <h2>Create a New Product</h2>
        <ProductForm />
      </div>
    )
  }
}
