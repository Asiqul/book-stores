import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/404';
import Index from './Pages/Index';
import Dashboard from './Pages/Dashboard';
import Checkout from './Pages/Checkout';
import ProductDetail from './Pages/Product-Detail';
import Search from './Pages/Search';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './Utils/Sevices/RequireAuth';
import ProtectRoute from './Utils/Sevices/ProtectRoute';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route element={<ProtectRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<RequireAuth />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/search" element={<Search />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
