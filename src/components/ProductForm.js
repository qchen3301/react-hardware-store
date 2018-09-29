import React, { Component } from 'react'

export default class ProductForm extends Component {
    state={
        newProduct: {

        }
    }

    handleNewProductChange = (event) => {
        const eventValue = event.target.value
        const eventName = event.target.name

        //take it
        const newProduct = {...this.state.newProduct}
        //change it
        newProduct[eventName] = eventValue
        //put it back
       this.setState({newProduct})
    }

    //intermediary function that 
    addProduct = (event) => {
        event.preventDefault() //this prevents <form> from auto-sending GET
        this.props.addNewProductToProductList(this.state.newProduct)
    }

    

  render() {
    return (
      <div>
        <form>
          <div><input name="productName" type="text" placeholder="Name" onChange={this.handleNewProductChange} /></div>
          <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange} /></div>
          <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
          <div>
              <input 
                type="submit" 
                value="Create New Product"
                onClick={this.addProduct} /> {/*writing '() =>' after onClick prevents the component from re-rendering in a loop ad infinitum*/}
        </div>
        </form>
      </div>
    )
  }
}
