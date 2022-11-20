import Home  from "./pages/Home";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import CategoryPage from "./pages/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ProductPage} from "./pages/ProductPage";
function App() {

  return (

    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path=":category/:product" element={<ProductPage />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
