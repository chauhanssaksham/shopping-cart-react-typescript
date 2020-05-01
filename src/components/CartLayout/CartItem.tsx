import React, {Component} from 'react';

interface Props{

}

interface State{
    price: number,
    title: string,
    qty: number,
    img: string
}

class CartItem extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        };
    }

    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize:25 }}>{this.state.title}</div>
                    <div style={{ color:'#777' }}>Rs {this.state.price}</div>
                    <div style={{ color:'#777' }}>Qty: {this.state.qty}</div>
                    <div className="card-item-actions">
                        {/* Buttons */}
                        <img src="https://image.flaticon.com/icons/svg/1828/1828919.svg" alt="increase" className="action-icons"/>
                        <img src="https://image.flaticon.com/icons/svg/1828/1828899.svg" alt="decrease" className="action-icons"/>
                        <img src="https://image.flaticon.com/icons/svg/709/709519.svg" alt="delete" className="action-icons"/>
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