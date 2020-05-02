import React, { Component } from 'react';
import CartItem from './CartItem';

interface Props{

}

interface State{

}

class Cart extends Component<Props, State>{
    render(){
        return (
            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}

export default Cart;