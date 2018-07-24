import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store.js';
// import { addToCart, updateCart, deleteFromCart } from './actions/cart-actions';
import { Provider } from 'react-redux';


// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));

// // Update Cart
// store.dispatch(updateCart('Flour 1kg', 5, 110));

// // Delete from Cart
// store.dispatch(deleteFromCart('Coffee 500gm'));

ReactDOM.render(
    <Provider store={store}>
        {<App />}
    </Provider>,
    document.getElementById('root')
);