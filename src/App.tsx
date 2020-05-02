import React, { Component } from 'react';
import Cart from './components/CartLayout/Cart'
import Navbar from './components/Navbar/Navbar'

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
                    img: '',
                    id: 1
                },
                {
                    price: 20000,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Blackberry',
                    qty: 1,
                    img: '',
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
  render(){
    return (
        <div className="App">
            <Navbar/>
            <Cart 
                products={this.state.products} 
                handleIncreaseQuantity={this.handleIncreaseQuantity}
                handleDecreaseQuantity={this.handleDecreaseQuantity}
                handleDeleteItem={this.handleDeleteItem}
            />
        </div>
      );
  }
}

export default App;
