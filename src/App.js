import "./App.css";
import ProductComponent from "./components/ProductComponent";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions/productAction";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductComponent />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
