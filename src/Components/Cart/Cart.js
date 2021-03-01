import React from 'react';

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation+ country.population;
    }
    return (
        <div>
            <h2>This is cart: {cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;