import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/product-detail/:id" element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
