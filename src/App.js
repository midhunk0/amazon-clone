import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
function App() {
    // BEM
    return (
        <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={ <HeaderHome/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/checkout" element={<HeaderCheckout/>}/>
            </Routes>
        </div>
        </Router>
    );
}
function HeaderHome(){
    return(
        <>
            <Header/>
            <Home/>
        </>
    )
}
function HeaderCheckout(){
    return(
        <>
            <Header/>
            <Checkout/>
        </>
    )
}

export default App;
