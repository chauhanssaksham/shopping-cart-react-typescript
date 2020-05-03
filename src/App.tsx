import React, { Component } from 'react';
import Cart from './components/CartLayout/Cart'
import Navbar from './components/Navbar/Navbar'
import * as firebase from 'firebase'

interface Props{

}

interface State{
    products: Product[],
    loading: boolean
}

interface Product{
    price: number,
    title: string,
    qty: number,
    img: string,
    id: string
}

class App extends Component<{}, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            products: [],
            loading: true
        }
    }

    componentDidMount(){
        // firebase
        //     .firestore()
        //     .collection('products')
        //     .get()
        //     .then((snapshot)=>{
        //         const products = snapshot.docs.map((doc)=>{
        //             const product: Product = {
        //                 id: doc.id,
        //                 price: doc.data().price,
        //                 qty: doc.data().qty,
        //                 title: doc.data().title,
        //                 img: doc.data().img,
        //             }
        //             return product;
        //         });
        //         // console.log(products);
        //         this.setState(
        //             {
        //                 products,
        //                 loading: false
        //             }
        //         )
        //     });
        firebase
            .firestore()
            .collection('products')
            .onSnapshot((snapshot)=>{
                const products = snapshot.docs.map((doc)=>{
                    const product: Product = {
                        id: doc.id,
                        price: doc.data().price,
                        qty: doc.data().qty,
                        title: doc.data().title,
                        img: doc.data().img,
                    }
                    return product;
                });
                // console.log(products);
                this.setState(
                    {
                        products,
                        loading: false
                    }
                )
            });


    }

    handleIncreaseQuantity: (product:Product) => void = (product) => {
        // console.log("Pls inc qty of ", product);
        let {products} = this.state;
        const index:number = products.indexOf(product);
        // products[index].qty += 1;
        // this.setState({
        //     products
        // })
        const docRef = 
            firebase
                .firestore()
                .collection('products')
                .doc(products[index].id);
        docRef.update({
            qty: products[index].qty+1
        }).then(()=>{
            console.log('Doc updated');
        }).catch(err => {
            console.log('ERROR in updating: ', err);
        })

    }
    handleDecreaseQuantity: (product:Product) => void = (product) => {
        // console.log("Pls dec qty of ", product);
        let {products} = this.state;
        const index:number = products.indexOf(product);
        if (products[index].qty > 0){
            const docRef = 
                firebase
                    .firestore()
                    .collection('products')
                    .doc(products[index].id);
            docRef.update({
                qty: products[index].qty-1
            }).then(()=>{
                console.log('Doc updated');
            }).catch(err => {
                console.log('ERROR in updating: ', err);
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
            total+=(product.price)*(product.qty)
        });
        return total;
    }
    addProduct= ():void => {
        firebase
            .firestore()
            .collection('products')
            .add({
                img: 'https://www.lg.com/in/images/washing-machines/md06217536/gallery/01-Washing-Machines-1100.jpg',
                price: 9999,
                title: 'Washing Machine',
                qty: 50
            })
            .then((docRef) => {
                console.log(docRef);
            })
            .catch(err => {
                console.log('error:' , err);
            });
    }

  render(){
    return (
        <div className="App">
            <Navbar count={this.getCartCount()}/>
            <button onClick={this.addProduct}>Add</button>
            <Cart 
                products={this.state.products} 
                handleIncreaseQuantity={this.handleIncreaseQuantity}
                handleDecreaseQuantity={this.handleDecreaseQuantity}
                handleDeleteItem={this.handleDeleteItem}
            />
            {this.state.loading && <h1>Loading Products...</h1>}
            <div>Total: {this.getCartTotal()}</div>
        </div>
      );
  }
}

export default App;
