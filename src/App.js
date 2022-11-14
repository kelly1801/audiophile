import Home  from "./pages/Home";
import NavBar from "./components/home/NavBar";
import Footer from "./components/home/Footer";
import CategoryPage from "./pages/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path=":category" element={<CategoryPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
