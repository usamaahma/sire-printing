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
import SmallPillowPage from './pages/smallpillowpage';
import Kraftpage from './pages/kraftpage';
import Rigidciggeratebox from './pages/cbd-packaging/rigidciggeratebox';
import Luxurycigarbox from './pages/cbd-packaging/luxurycigarbox';
import Incenseboxpage from './pages/All-products/incenseboxpage';
import Smallmailerboxpage from './pages/cbd-packaging/smallmailerboxpage';
import Blog from './components/blogs/blog';
import Foodpack from './components/blogs/foodpackaging';
import Tenreasonsccboxes from './components/blogs/tenreasonsccboxes';
import Retailpackagingpage from './pages/retail-packaging-page/retailpackagingpage';
import Bathbombpage from './pages/retail-packaging-page/bathbombpage';
import Candleboxespage from './pages/retail-packaging-page/candleboxespage';
import Candyboxpage from './pages/retail-packaging-page/candyboxpage';
import Rigidboxespage from './pages/Rigid-boxes/rigidboxespage';
import Cellphoneboxpage from './pages/Rigid-boxes/cellphoneboxpage';
import Collapsiblerigidboxpage from './pages/Rigid-boxes/collapsiblerigidboxpage';
import Walletrigidboxpage from './pages/Rigid-boxes/walletrigidboxpage';
import Landfoodpackage from './pages/land-foodpackaging/landfoodpackage';
import Bakeryboxpage from './pages/land-foodpackaging/bakeryboxpage';
import Burgerboxpage from './pages/land-foodpackaging/burgerboxpage';
import Cerealboxpage from './pages/land-foodpackaging/cerealboxpage';
import Cosmeticpackagingpage from './pages/cosmetic-packaging/cosmeticpackagingpage';
import Aboutus from './components/about-us/aboutus';
import Contactus from './components/contact-us/contactus';
import Privacy from './components/privacy-policy/privacy';
import Term from './components/term-condition/termandcondition';
import GetAQuote from './components/Get a quote/getaquote';
import Sitemap from './components/site-map/sitemap';
 
 
 
 

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
                    <Route path="custom-Retail-Packaging" element={<Retailpackagingpage />}/>
                    <Route path="Custom-box-styles" element={<Customboxpage />} />
                    <Route path="Custom-stickers" element={<Customstickerpage />} />
                    <Route path="Christmas-boxes" element={<Christmasboxpage />} />
                    <Route path="portfolio" element={<Portfoliopage1 />} />
                    <Route path='small-pillow-boxes' element={<SmallPillowPage/>}/>
                    <Route path='kraft-cereal-boxes' element={<Kraftpage/>}/>
                    <Route path='rigid-cigarette-boxes' element={<Rigidciggeratebox/>}/>
                    <Route path='luxury-cigar-boxes' element={<Luxurycigarbox/>}/>
                    <Route path='incense-boxes' element={<Incenseboxpage/>}/>
                    <Route path='small-mailer-boxes' element={<Smallmailerboxpage/>}/>
                    <Route path='Blogs' element={<Blog/>}/>
                    <Route path='food-packaging' element={<Foodpack/>}/>
                    <Route path='10-reasons-to-love-custom-cereal-boxes' element={<Tenreasonsccboxes/>}/>
                    <Route path='Bath-bomb-boxes' element={<Bathbombpage/>}/>
                    <Route path='candle-boxes' element={<Candleboxespage/>}/>
                    <Route path='candy-boxes' element={<Candyboxpage/>}/>
                    <Route path='rigid-boxes' element={<Rigidboxespage/>}/>
                    <Route path='cell-phone-boxes' element={<Cellphoneboxpage/>}/>
                    <Route path='collapsible-rigid-boxes' element={<Collapsiblerigidboxpage/>}/>
                    <Route path='wallet-rigid-boxes' element={<Walletrigidboxpage/>}/>
                    <Route path='food-package' element={<Landfoodpackage/>}/>
                    <Route path='bakery-boxes' element={<Bakeryboxpage/>}/>
                    <Route path='burger-boxes' element={<Burgerboxpage/>}/>
                    <Route path='cereal-boxes' element={<Cerealboxpage/>}/>
                    <Route path='cosmetic-packaging-boxes' element={<Cosmeticpackagingpage/>}/>
                    <Route path='about-us' element={<Aboutus/>}/>
                    <Route path='contact-us' element={<Contactus/>}/>
                    <Route path='privacy' element={<Privacy/>}/>
                    <Route path='Terms and conditions' element={<Term/>}/>
                    <Route path='get a quote' element={<GetAQuote/>}/>
                    <Route path='site-map' element={<Sitemap/>}/>


                </Routes>
                <Footer1 />
            </>
        </Router>
    );
};

export default AppRoutes;
