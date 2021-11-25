import Home from '../../pages/Home/Home';
import Wish from '../../pages/Wishlist/Wish';
import './Main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/wishlist' element={<Wish/>} />
        </Routes>      
      </BrowserRouter>
    </>
  );
}
