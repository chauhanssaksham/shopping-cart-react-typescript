import React, {Component} from 'react';

interface Props{
    product: Product,
    onIncreaseQuantity: (product: Product)=>void,
    onDecreaseQuantity: (product: Product)=>void,
}

interface State{

}

interface Product{
    price: number,
    title: string,
    qty: number,
    img: string,
    id: number
}


class CartItem extends Component<Props, State>{

    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize:25 }}>{this.props.product.title}</div>
                    <div style={{ color:'#777' }}>Rs {this.props.product.price}</div>
                    <div style={{ color:'#777' }}>Qty: {this.props.product.qty}</div>
                    <div className="card-item-actions">
                        {/* Buttons */}
                        <img 
                            src="https://image.flaticon.com/icons/svg/1828/1828919.svg" 
                            alt="increase" 
                            className="action-icons"
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)}    
                        />
                        <img 
                            src="https://image.flaticon.com/icons/svg/1828/1828899.svg" 
                            alt="decrease" 
                            className="action-icons"
                            onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img 
                            src="https://image.flaticon.com/icons/svg/709/709519.svg" 
                            alt="increase" 
                            className="action-icons"
                            // onClick={this.increaseQuantity}    
                        />
                        </div>
                </div>
            </div>
        )
    }
}

const styles: any = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;