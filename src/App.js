import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () =>{
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  };

  const handleAddToCart = async (productId, quantity) => {// eslint-disable-line
    const item = await commerce.cart.add(productId, quantity);// eslint-disable-line

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {// eslint-disable-line
    const { cart } = await commerce.cart.update(productId, { quantity });// eslint-disable-line

    setCart(cart)
  };

  const handleRemoveFromCart = async (productId) => {// eslint-disable-line
    const { cart } = await commerce.cart.remove(productId);// eslint-disable-line

    setCart(cart)
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.remove(productId);// eslint-disable-line

    setCart(cart);
  };

  useEffect(() => {
      fetchProducts();
      fetchCart();
  }, []);

  console.log(cart);

    return (
     <Router>
        <div>
          <Navbar totalItems={cart.total_items}/>
          <Switch>
            <Route exact path="/">
              <Products products={products}  onAddToCart={handleAddToCart}/> 
            </Route>
            <Route exact path="/cart">
              <Cart 
              cart={cart} 
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;