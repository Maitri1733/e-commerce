import "./App.css";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import SingUp from "./components/SignUp.js";
import PrivateComponents from "./components/PrivateComponents.js";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Login from "./components/Login.js";
import AddProduct from "./components/AddProduct.js";
import ProductList from "./components/ProductList.js";
import UpdateProduct from "./components/UpdateProduct.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route element={<PrivateComponents> </PrivateComponents>}>
            <Route path="/" element={<h1>Welcome, E-comm</h1>}></Route>
            <Route
              path="/products"
              element={<ProductList></ProductList>}
            ></Route>
            <Route
              path="/add_product"
              element={<AddProduct></AddProduct>}
            ></Route>
            <Route
              path="/update/:id"
              element={<UpdateProduct></UpdateProduct>}
            ></Route>
            <Route path="/logout" element={<h1>Logout Components</h1>}></Route>
            <Route
              path="/profile"
              element={<h1>Profile Components</h1>}
            ></Route>
          </Route>
          <Route path="/signup" element={<SingUp></SingUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
