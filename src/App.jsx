import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <NavBar />
           <div className='container-fluid'>
           <Routes>
              <Route path='/' element= {<ItemListContainer />} />
              <Route path='/category/:categoryId' element= {<ItemListContainer />} />
              <Route path='/item/:itemid' element= {<ItemDetailContainer />} />
              <Route path='*' element= {<h1 className="text-center mt-5">404 NOT FOUND</h1>} />
            </Routes>
           </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
