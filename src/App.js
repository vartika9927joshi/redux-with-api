import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/product-detail/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
