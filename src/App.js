import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './Components/main/main';
import Cart from './Components/cart/cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} ></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
