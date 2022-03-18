import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";

import Cart from "./Components/Cart";

import Login from "./Components/Login";
import Register from "./Components/Register";
import ProductPage from "./Components/ProductPage";
import Nav from "./Components/Nav";


function App() {
  return (


    <div className="App">
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Register/>}/>
        <Route path="/prodpage" element={ <ProductPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
