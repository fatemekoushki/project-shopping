import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContextProvider } from './components/Home/context/shopContext';
import Home from './components/Home/Home';
import Cart from './components/Home/CartShopping/Cart';
import Relation from './components/Home/Call/Relation';
import Products from './components/Home/Body/Products';
import Navbar from './components/Home/Navbar/Navbar';
import Details from './components/Home/Body/Details';
import Register from './components/auth/Register';
import axios from "axios" ;
import Login from './components/auth/Login';
import Footer from './components/Home/Footer/Footer';

axios.defaults.baseURL = "http://localhost:5000/" ;
axios.defaults.headers.post['Content-Type'] =  "application/json" ;
axios.defaults.headers.post['Accept'] =  "application/json" ;
axios.defaults.withCredentials = true



function App() {
  return (
    <BrowserRouter>
    <ShopContextProvider>
      <Navbar />
    <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/cart'   element={<Cart/>}  />
      <Route path='/relation' element={<Relation/>} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Details />} />
      <Route path='/register' element={<Register/>} />
      <Route  path='/login'  element={<Login/>} />

    </Routes>
    <Footer />

    </ShopContextProvider>
    </BrowserRouter>

   
  
  )
    
}

export default App;
