import React, { Component } from 'react';
import CartItem from './CartItem';

interface Props{
    products: Product[],
    handleIncreaseQuantity: (product: Product)=>void,
    handleDecreaseQuantity: (product: Product)=>void,
    handleDeleteItem: (product: Product)=>void
}

interface State{

}

interface Product{
    price: number,
    title: string,
    qty: number,
    img: string,
    id: string
}

class Cart extends Component<Props, State>{

    render(){
        const {products} = this.props;

        return (
            <div className="cart">\
                {products.map((product:Product) => {
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreaseQuantity={this.props.handleIncreaseQuantity}
                            onDecreaseQuantity={this.props.handleDecreaseQuantity}
                            onDeleteItem={this.props.handleDeleteItem}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;