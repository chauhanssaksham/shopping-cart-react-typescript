import React from 'react';

interface Props{
    product: Product,
    onIncreaseQuantity: (product: Product)=>void,
    onDecreaseQuantity: (product: Product)=>void,
    onDeleteItem: (product: Product)=>void
}

interface Product{
    price: number,
    title: string,
    qty: number,
    img: string,
    id: number
}


const CartItem = (props: Props) => {

    return (
        <div className="cart-item">
            <div className="left-block">
                <img src={props.product.img} alt={props.product.title} style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{ fontSize:25 }}>{props.product.title}</div>
                <div style={{ color:'#777' }}>Rs {props.product.price}</div>
                <div style={{ color:'#777' }}>Qty: {props.product.qty}</div>
                <div className="card-item-actions">
                    {/* Buttons */}
                    <img 
                        src="https://image.flaticon.com/icons/svg/1828/1828919.svg" 
                        alt="increase" 
                        className="action-icons"
                        onClick={()=>props.onIncreaseQuantity(props.product)}    
                    />
                    <img 
                        src="https://image.flaticon.com/icons/svg/1828/1828899.svg" 
                        alt="decrease" 
                        className="action-icons"
                        onClick={()=>props.onDecreaseQuantity(props.product)}
                    />
                    <img 
                        src="https://image.flaticon.com/icons/svg/709/709519.svg" 
                        alt="increase" 
                        className="action-icons"
                        onClick={()=>props.onDeleteItem(props.product)}    
                    />
                    </div>
            </div>
        </div>
    )
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