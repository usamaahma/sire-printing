import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage1 from './pages/landingpage';
import Footer1 from './components/footer';
import ScrollToTop from './components/scrolltop';
import Firstnav1 from './components/navbars/firstnav';
import Mainnav1 from './components/navbars/mainnav';
import Allproductspage1 from './pages/allproductspage';
 
 
 

const AppRoutes = () => {
    return (
        <Router>
            <Firstnav1 />
            <Mainnav1 />
            <>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Landingpage1 />} />
                    <Route path="all-products" element={<Allproductspage1 />} />
                </Routes>
                {/* <Footer1 /> */}
            </>
        </Router>
    );
};

export default AppRoutes;
