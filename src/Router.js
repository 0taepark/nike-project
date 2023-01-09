import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import ItemList from './pages/ItemsList/ItemsList';
import Cart from '../src/pages/Cart/Cart';
import WishList from './pages/wishlist/WishList';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import './styles/reset.scss';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/item-detail/:productId" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish-list" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
