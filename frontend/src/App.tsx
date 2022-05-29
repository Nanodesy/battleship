import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/notfound/NotFound";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/auth">
                        <Route path="/auth/login" element={<Login/>}/>
                        <Route path="/auth/register" element={<Register/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
