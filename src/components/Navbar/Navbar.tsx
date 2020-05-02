import React, {Component} from 'react';

interface Props{
    count: number
}

interface State{

}



class Navbar extends Component<Props, State>{

    render(){
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/1170/1170627.svg" alt="cart-icon"/>
                    <span style={styles.cartCount}> {this.props.count} </span>
                </div>
            </div>
        )
    }
}

const styles: any = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}

export default Navbar;