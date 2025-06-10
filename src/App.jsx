import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ExtensionCardMain from './components/ExtensionCard';
import Test from "./components/test.jsx";

function App(){
    return(
        <div className="contentMain">
            <ExtensionCardMain/>
        </div>
        // <BrowserRouter>  
        //     <nav>
        //         <Link to="/">Inicio</Link> | <Link to="/about">Acerca</Link>
        //     </nav>
        //      <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/about" element={<About />} />
        //     </Routes>
        // </BrowserRouter>
    )
}

export default App;