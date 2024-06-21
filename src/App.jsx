import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart.jsx';
import Checkout from './components/checkout.jsx';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer.jsx';
import Carousel from './components/Carousel.jsx';

function App() {
  return (
    <div className='App'>
      <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Carousel />
          <div className='container-fluid'>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'} />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1 className="text-center mt-5">404 NOT FOUND</h1>} />
            </Routes>
          </div>
      </BrowserRouter>
      
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;