import React, { Component } from 'react';
import Cart from './components/CartLayout/Cart'
import Navbar from './components/Navbar/Navbar'
import { threadId } from 'worker_threads';

interface Props{

}

interface State{
    products: Product[]
}

interface Product{
    price: number,
    title: string,
    qty: number,
    img: string,
    id: number
}

class App extends Component<{}, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            products: [
                {
                    price: 10000,
                    title: 'Phone',
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80',
                    id: 1
                },
                {
                    price: 20000,
                    title: 'Laptop',
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Blackberry',
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1474480109237-15a7ca8f0685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity: (product:Product) => void = (product) => {
        // console.log("Pls inc qty of ", product);
        let {products} = this.state;
        const index:number = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products
        })
    }
    handleDecreaseQuantity: (product:Product) => void = (product) => {
        // console.log("Pls dec qty of ", product);
        let {products} = this.state;
        const index:number = products.indexOf(product);
        if (products[index].qty > 0){
            products[index].qty -= 1;
            this.setState({
                products
            })
        }
    }
    handleDeleteItem: (product: Product) => void = (product) => {
        let {products} = this.state;
        this.setState({
            products: products.filter(prod => product.id !== prod.id)
        })
    }
    getCartCount = ():number =>{
        const {products} = this.state;
        let count = 0;
        products.forEach(product => {
            count+=product.qty
        });
        return count;
    }
    getCartTotal = ():number => {
        const {products} = this.state;
        let total = 0;
        products.forEach(product => {
            total+=product.price
        });
        return total;
    }


  render(){
    return (
        <div className="App">
            <Navbar count={this.getCartCount()}/>
            <Cart 
                products={this.state.products} 
                handleIncreaseQuantity={this.handleIncreaseQuantity}
                handleDecreaseQuantity={this.handleDecreaseQuantity}
                handleDeleteItem={this.handleDeleteItem}
            />
            <div>Total: {this.getCartTotal()}</div>
        </div>
      );
  }
}

export default App;
