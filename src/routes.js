import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage1 from './pages/landingpage';
import Footer1 from './components/footer';
import ScrollToTop from './components/scrolltop';
import Firstnav1 from './components/navbars/firstnav';
import Mainnav1 from './components/navbars/mainnav';
import Allproductspage1 from './pages/allproductspage';
import Cbdpackagingpage from './pages/cbdpackagingpage';
import Customboxpage from './pages/customboxpage';
import Customstickerpage from './pages/customstickerpage';
import Christmasboxpage from './pages/christmasboxpage';
import Portfoliopage1 from './pages/portfoliopage';
 
 
 
 

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
                    <Route path="CBD-Packaging" element={<Cbdpackagingpage />} />
                    <Route path="Custom-box-styles" element={<Customboxpage />} />
                    <Route path="Custom-stickers" element={<Customstickerpage />} />
                    <Route path="Christmas-boxes" element={<Christmasboxpage />} />
                    <Route path="portfolio" element={<Portfoliopage1 />} />
                </Routes>
                <Footer1 />
            </>
        </Router>
    );
};

export default AppRoutes;
