import Product from "./pages/Product/Product";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import { useSelector } from "react-redux";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Success from "./pages/Success/Success.jsx";

const App = () => {
    const user = useSelector(state => state.user.currentUser)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products/:category' element={<ProductList />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/favorites/:id' element={<Favorites />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={user ? <Home /> : <Login />} />
                <Route path='/register' element={user ? <Home /> : <Register />} />
                <Route path='/success' element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;