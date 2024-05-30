import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart.jsx';
import Checkout from './components/checkout.jsx'; // Import should be capitalized
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <div className='container-fluid'>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'} />} />
              <Route path='/item/:itemid' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1 className="text-center mt-5">404 NOT FOUND</h1>} />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;