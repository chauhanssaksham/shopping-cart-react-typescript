import React, { Component } from 'react';
import CartItem from './CartItem';

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

class Cart extends Component<Props, State>{

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
        console.log("Pls inc qty of ", product);
    }
    handleDecreaseQuantity: (product:Product) => void = (product) => {
        console.log("Pls dec qty of ", product);
    }

    render(){
        
        return (
            <div className="cart">\
                {this.state.products.map(product => {
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;