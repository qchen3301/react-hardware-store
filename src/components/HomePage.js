import React, { Component } from 'react'
import AdminView from './AdminView';
import ShopView from './ShopView';

export default class HomePage extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         itemOnSale: "A Hammer"
    //     }
    // }

    state = {
        itemCurrentlyOnSale: "ur mum lol",
        editSaleItem: true,
        displayAdminView: true,
        productList: [
            {
              productName: 'Hammer',
              description: 'Itsa hammer',
              price: 12.3,
            },
            {
              productName: 'Nail',
              description: 'Itsa nail',
              price: 0.12,
            }
        ],
        //built a new condition into the state, a cart
        cartList: []
    }
    
    //this function goes to ProductForm to allow ProductForm to retrieve data and send it back to here, the "database"
    //conceptually, we want to take OUT the entire product list from the "state" , change it, and then PUT IT BACK into the "state"
    addNewProductToProductList = (product) => {
        //take it out
        const productList = [...this.state.productList] //we use an array because productList is an array
        //change it
        productList.push(product)
        //put it back
        this.setState({productList})
    }

    deleteProductFromProductList = (deletedItemIndex) => { 
        const productList = [...this.state.productList]
        productList.splice(deletedItemIndex, 1)
        this.setState({productList})
    }
    //2. created a function to "add" aka push an item into cartList[] in state
    addItemToCart = (index) => {
        let boughtItem = this.state.productList[index]

        //take
        const cartList = [...this.state.cartList]
        //change
        cartList.push(boughtItem)
        //put back
        this.this.setState({cartList})
    }

    //function
    toggleEditSaleItem = () => {
        this.setState({        //setState() is a function that takes an object. The object is the state that is being mutated
            editSaleItem: !this.state.editSaleItem,    
        })    
    }

    //function
    toggleDisplayAdminView = () => {
        this.setState({
            displayAdminView: !this.state.displayAdminView
        })
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        // let itemCurrentlyOnSale = this.state.itemCurrentlyOnSale
        const itemCurrentlyOnSale = event.target.value
        this.setState({ itemCurrentlyOnSale })  //({itemCurrentlyOnSale: itemCurrentlyOnSale})
    }

    render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <div>Currently On Sale: {this.state.itemCurrentlyOnSale}</div>
        <span>
            <button onClick={this.toggleEditSaleItem}>   {/*onClick always expects a function*/}
                {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
            </button>
        </span>
        <span>
            <button onClick={this.toggleDisplayAdminView}>
                {this.state.displayAdminView ? 'Show Admin View' : 'Hide Admin View'}
            </button>
        </span>
            <div>
                {/*condition ? "true" : "false" */}
                {this.state.editSaleItem ? 
                    <input 
                        type="text" 
                        value={this.state.itemCurrentlyOnSale}  //true
                            onChange={this.handleItemCurrentlyOnSaleChange}    /> : //turnkey
                        null}   {/*false*/}
                
            </div>

            {this.state.displayAdminView ? 
                <AdminView 
                    productList = {this.state.productList}
                    addNewProductToProductList = {this.addNewProductToProductList}
                    deleteProductFromProductList = {this.deleteProductFromProductList} />
                : //ORRRRRRRR show deeees
                // 3.ShopView now has to take the function addItemToCart and also the new conditional in our state, cartList[]
                <ShopView 
                     productList = {this.state.productList} 
                     addItemToCart = {this.addItemToCart} //this is a function
                     cartList = {this.state.cartList}/> //this is the state
            }
            
            
      </div>
    )
  }
}