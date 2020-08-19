import React, { Component } from 'react';
import { Table } from 'reactstrap';
export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(product) {
        if (!this.state.cartItems.find(x => x === product)) {
            this.setState({
                cartItems: this.state.cartItems.concat(product)
            });
            localStorage.setItem("cartItems",JSON.stringify(this.state.cartItems.concat(product)));
        }
    }
    render() {
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}
export class Cart extends Component {
    constructor(props) {
        super(props);
        
    }
    static contextType = CartContext;
    render() {
        return (
            <div className='Cart'>
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            {JSON.parse(localStorage.getItem("cartItems")).map((item, index) =>
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td><img alt={item.name} width={50} height={50} src={'http://localhost:9032/public/image/'+item.image} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>)
                            }
                    </tbody>
                </Table>
            </div>
        )
    }
}