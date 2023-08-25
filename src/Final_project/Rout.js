import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import DashBoard from './Dashboard';
import Template from "./Template";
import Product from './Product';
import FooterFunction from './Footer';
import AccountPage from './AccountPage';
import LoginPage from './Login';
import Addproduct from './Addproduct';
import Nopage  from "./Nopage";

export default function AppRout() {
    return ( 
        <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact  path="/" element={<Template />}></Route>
                <Route path="Dashboard" element={<DashBoard />}></Route>
                <Route path="AccountPage" element={<AccountPage />}></Route>
                <Route path="Product" element={<Product />}></Route>
                <Route path="AddProduct" element={<Addproduct />}></Route>
                <Route path="LoginAg" element={<LoginPage />}></Route>
                <Route path="*" element={<Nopage />}></Route>
            </Routes>
            < FooterFunction/>
        </Router>
        </div>
    )
}