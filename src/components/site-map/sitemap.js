import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./sitemap.css";

const Sitemap = () => {
  const items = {
    "CDB Packaging": [
      {
        name: "Custom Cannabis Blunt Boxes",
        path: "/cbd-packaging/blunt-boxes",
      },
      {
        name: "Custom Cannabis Display Boxes",
        path: "/cbd-packaging/display-boxes",
      },
      {
        name: "Custom Cannabis Perfume Boxes",
        path: "/cbd-packaging/perfume-boxes",
      },
      {
        name: "Custom CBD Bath Bomb Boxes",
        path: "/cbd-packaging/bath-bomb-boxes",
      },
      { name: "Custom CBD Candy Boxes", path: "/cbd-packaging/candy-boxes" },
      {
        name: "Custom CBD Concentrate Boxes",
        path: "/cbd-packaging/concentrate-boxes",
      },
      {
        name: "Custom CBD Cosmetic Boxes",
        path: "/cbd-packaging/cosmetic-boxes",
      },
      {
        name: "Custom CBD Dropper Bottle Boxes",
        path: "/cbd-packaging/dropper-bottle-boxes",
      },
      {
        name: "CBD Essential Oil Boxes",
        path: "/cbd-packaging/essential-oil-boxes",
      },
      {
        name: "Custom CBD Extract Boxes",
        path: "/cbd-packaging/extract-boxes",
      },
      {
        name: "Custom CBD Kush Cannabis Boxes",
        path: "/cbd-packaging/kush-cannabis-boxes",
      },
      {
        name: "Custom CBD Muscle Rub Boxes",
        path: "/cbd-packaging/muscle-rub-boxes",
      },
      {
        name: "Custom Printed CBD Oil Boxes",
        path: "/cbd-packaging/printed-oil-boxes",
      },
      {
        name: "Custom CBD Roll On Boxes",
        path: "/cbd-packaging/roll-on-boxes",
      },
      {
        name: "Custom Child Resistant Cannabis Boxes",
        path: "/cbd-packaging/child-resistant-boxes",
      },
      {
        name: "Custom Cigarette Boxes",
        path: "/cbd-packaging/cigarette-boxes",
      },
      { name: "Custom Hemp Boxes", path: "/cbd-packaging/hemp-boxes" },
      {
        name: "Custom Pre Rolled Cones Boxes USA",
        path: "/cbd-packaging/pre-rolled-cones",
      },
      { name: "Custom Tincture Boxes", path: "/cbd-packaging/tincture-boxes" },
      { name: "Custom Vape Boxes", path: "/cbd-packaging/vape-boxes" },
      { name: "Custom E Liquid Boxes", path: "/cbd-packaging/e-liquid-boxes" },
      { name: "Hemp Tea Boxes", path: "/cbd-packaging/hemp-tea-boxes" },
      {
        name: "Custom Medical Cannabis Boxes",
        path: "/cbd-packaging/medical-cannabis-boxes",
      },
      {
        name: "Custom CBD Pod Vape Boxes",
        path: "/cbd-packaging/pod-vape-boxes",
      },
      {
        name: "Custom Hemp Pre Rolled Boxes",
        path: "/cbd-packaging/hemp-pre-rolled-boxes",
      },
      {
        name: "Custom CBD Pre Rolls Packaging Boxes",
        path: "/cbd-packaging/pre-rolls-boxes",
      },
      {
        name: "Custom Vape Accessories Boxes",
        path: "/cbd-packaging/vape-accessories",
      },
      {
        name: "Custom Vape Juice Bottle Boxes",
        path: "/cbd-packaging/vape-juice-bottle-boxes",
      },
      {
        name: "Custom Vape Oil Cartridge Boxes",
        path: "/cbd-packaging/vape-oil-cartridge-boxes",
      },
      { name: "Custom Vape Pen Boxes", path: "/cbd-packaging/vape-pen-boxes" },
      {
        name: "Custom Organic Hemp Soap Boxes",
        path: "/cbd-packaging/hemp-soap-boxes",
      },
      {
        name: "Custom CBD Gummies Boxes",
        path: "/cbd-packaging/gummies-boxes",
      },
      { name: "Custom CBD Pills Boxes", path: "/cbd-packaging/pills-boxes" },
      {
        name: "Custom CBD Topical Boxes",
        path: "/cbd-packaging/topical-boxes",
      },
      {
        name: "Custom CBD Pain Cream Boxes",
        path: "/cbd-packaging/pain-cream-boxes",
      },
      { name: "Custom CBD Lotion Boxes", path: "/cbd-packaging/lotion-boxes" },
      {
        name: "Custom CBD Isolate Boxes",
        path: "/cbd-packaging/isolate-boxes",
      },
      {
        name: "Custom CBD Lollipop Boxes",
        path: "/cbd-packaging/lollipop-boxes",
      },
      { name: "Custom CBD Gum Boxes", path: "/cbd-packaging/gum-boxes" },
      {
        name: "Custom CBD Edibles Boxes",
        path: "/cbd-packaging/edibles-boxes",
      },
      {
        name: "Custom CBD Pet Products Boxes",
        path: "/cbd-packaging/pet-products-boxes",
      },
      { name: "Custom CBD Wraps Boxes", path: "/cbd-packaging/wraps-boxes" },
      {
        name: "CBD Sleeves Packaging",
        path: "/cbd-packaging/sleeves-packaging",
      },
      { name: "Custom CBD Salve Boxes", path: "/cbd-packaging/salve-boxes" },
      {
        name: "Custom CBD Beard Oil Boxes",
        path: "/cbd-packaging/beard-oil-boxes",
      },
      {
        name: "Custom CBD Chocolate Boxes",
        path: "/cbd-packaging/chocolate-boxes",
      },
      { name: "CBD Supplement Boxes", path: "/cbd-packaging/supplement-boxes" },
      {
        name: "Custom CBD Dab Wax Boxes",
        path: "/cbd-packaging/dab-wax-boxes",
      },
      { name: "CBD Serum Boxes", path: "/cbd-packaging/serum-boxes" },
      { name: "CBD Syringes Boxes", path: "/cbd-packaging/syringes-boxes" },
      {
        name: "Custom Cannabis Flower Boxes",
        path: "/cbd-packaging/cannabis-flower-boxes",
      },
      {
        name: "Custom Hemp Flour Boxes",
        path: "/cbd-packaging/hemp-flour-boxes",
      },
      {
        name: "Custom Hemp Seed Oil Boxes",
        path: "/cbd-packaging/hemp-seed-oil-boxes",
      },
      {
        name: "Custom Hemp Sunscreen Boxes",
        path: "/cbd-packaging/hemp-sunscreen-boxes",
      },
      {
        name: "Custom Hemp Candle Boxes",
        path: "/cbd-packaging/hemp-candle-boxes",
      },
      {
        name: "Custom Hemp Cereal Boxes",
        path: "/cbd-packaging/hemp-cereal-boxes",
      },
      {
        name: "Custom Hemp Cookie Boxes",
        path: "/cbd-packaging/hemp-cookie-boxes",
      },
      {
        name: "Custom Hemp Protein Bar Boxes",
        path: "/cbd-packaging/hemp-protein-bar-boxes",
      },
      {
        name: "Custom Pet CBD Oil Boxes",
        path: "/cbd-packaging/pet-cbd-oil-boxes",
      },
      {
        name: "Custom Vape Battery Charger Boxes",
        path: "/cbd-packaging/vape-battery-charger-boxes",
      },
      {
        name: "Custom CBD Shatter Envelopes",
        path: "/cbd-packaging/shatter-envelopes",
      },
      {
        name: "Custom Die Cut CBD Boxes",
        path: "/cbd-packaging/die-cut-boxes",
      },
    ],

    "Rigid Boxes": [
      { name: "Rigid Boxes", path: "/rigid-boxes" },
      { name: "Collapsible Rigid Boxes", path: "/rigid-boxes/collapsible" },
      { name: "Custom Wallet Rigid Boxes", path: "/rigid-boxes/wallet" },
      { name: "Custom Jewelry Boxes", path: "/rigid-boxes/jewelry" },
      { name: "Kraft Rigid Boxes", path: "/rigid-boxes/kraft" },
      { name: "Small Rigid Boxes", path: "/rigid-boxes/small" },
      {
        name: "Luxury Satin Lined Rigid Boxes",
        path: "/rigid-boxes/luxury-satin",
      },
      { name: "Rigid Cigarette Boxes", path: "/rigid-boxes/cigarette" },
      { name: "Luxury Cigar Boxes", path: "/rigid-boxes/cigar" },
    ],

    "Custom Retail Packaging": [
      { name: "Retail Packaging", path: "/custom-retail-packaging/retail" },
      {
        name: "Custom Bath Bomb Boxes",
        path: "/custom-retail-packaging/bath-bomb",
      },
      {
        name: "Custom Printed Candle Boxes",
        path: "/custom-retail-packaging/printed-candle",
      },
      {
        name: "Custom Cell Phone Boxes",
        path: "/custom-retail-packaging/cell-phone",
      },
      { name: "Mug Boxes", path: "/custom-retail-packaging/mug" },
      {
        name: "Custom Luxury Sleeve Boxes",
        path: "/custom-retail-packaging/luxury-sleeve",
      },
      { name: "Marble Boxes", path: "/custom-retail-packaging/marble" },
      {
        name: "Custom CD Jackets",
        path: "/custom-retail-packaging/cd-jackets",
      },
      {
        name: "Custom Phone Charger Boxes",
        path: "/custom-retail-packaging/phone-charger",
      },
      {
        name: "Playing Card Boxes",
        path: "/custom-retail-packaging/playing-card",
      },
      { name: "Custom Tea Boxes", path: "/custom-retail-packaging/tea" },
      { name: "Custom Aroma Boxes", path: "/custom-retail-packaging/aroma" },
      {
        name: "Custom Apparel Boxes",
        path: "/custom-retail-packaging/apparel",
      },
      {
        name: "Custom Shot Glass Boxes",
        path: "/custom-retail-packaging/shot-glass",
      },
      { name: "Baby Shoes Boxes", path: "/custom-retail-packaging/baby-shoes" },
      {
        name: "Business Cards Boxes",
        path: "/custom-retail-packaging/business-cards",
      },
      {
        name: "Custom Incense Box Packaging",
        path: "/custom-retail-packaging/incense",
      },
    ],

    "Food Packaging": [
      { name: "Custom Candy Boxes", path: "/food-packaging/candy-boxes" },
      { name: "Custom Bakery Boxes", path: "/food-packaging/bakery-boxes" },
      { name: "Custom Burger Boxes", path: "/food-packaging/burger-boxes" },
      { name: "Custom Cereal Boxes", path: "/food-packaging/cereal-boxes" },
      {
        name: "Custom Printed Cookie Boxes",
        path: "/food-packaging/printed-cookie-boxes",
      },
      { name: "Crepe Cone Packaging", path: "/food-packaging/crepe-cone" },
      {
        name: "Cupcake Packaging Boxes",
        path: "/food-packaging/cupcake-boxes",
      },
      { name: "Custom Donut Boxes", path: "/food-packaging/donut-boxes" },
      {
        name: "Custom Printed Food Packaging Sleeves",
        path: "/food-packaging/printed-sleeves",
      },
      { name: "Custom Cake Boxes", path: "/food-packaging/cake-boxes" },
      {
        name: "Custom Chocolate Boxes",
        path: "/food-packaging/chocolate-boxes",
      },
      { name: "Custom Food Boxes", path: "/food-packaging/food-boxes" },
      { name: "Custom Food Trays", path: "/food-packaging/food-trays" },
      {
        name: "Custom Ice Cream Boxes",
        path: "/food-packaging/ice-cream-boxes",
      },
      {
        name: "Custom K Cup Coffee Boxes",
        path: "/food-packaging/k-cup-coffee-boxes",
      },
      { name: "Custom Macaron Boxes", path: "/food-packaging/macaron-boxes" },
      { name: "Custom Sushi Boxes", path: "/food-packaging/sushi-boxes" },
      {
        name: "Kraft Cereal Boxes",
        path: "/food-packaging/kraft-cereal-boxes",
      },
    ],

    "Cosmetic Packaging Boxes": [
      {
        name: "Custom Anti Aging Cream Boxes",
        path: "/cosmetic-packaging/anti-aging-cream-boxes",
      },
      {
        name: "Custom Printed Beard Oil Boxes",
        path: "/cosmetic-packaging/beard-oil-boxes",
      },
      {
        name: "Custom Beauty Face Mask Boxes",
        path: "/cosmetic-packaging/face-mask-boxes",
      },
      {
        name: "Custom Bronzer Boxes",
        path: "/cosmetic-packaging/bronzer-boxes",
      },
      {
        name: "Custom Concealer Boxes",
        path: "/cosmetic-packaging/concealer-boxes",
      },
      {
        name: "Custom Cosmetic Window Boxes",
        path: "/cosmetic-packaging/window-boxes",
      },
      {
        name: "Custom Printed Cream Boxes",
        path: "/cosmetic-packaging/printed-cream-boxes",
      },
      {
        name: "Custom Cosmetic Boxes",
        path: "/cosmetic-packaging/cosmetic-boxes",
      },
      {
        name: "Custom Essential Oil Boxes",
        path: "/cosmetic-packaging/essential-oil-boxes",
      },
      { name: "Eye Serum Boxes", path: "/cosmetic-packaging/eye-serum-boxes" },
      {
        name: "Custom Eyebrow Pencil Boxes",
        path: "/cosmetic-packaging/eyebrow-pencil-boxes",
      },
      {
        name: "Custom Printed Eyelash Boxes",
        path: "/cosmetic-packaging/printed-eyelash-boxes",
      },
      {
        name: "Custom Eyeliner Boxes",
        path: "/cosmetic-packaging/eyeliner-boxes",
      },
      {
        name: "Custom Eyeshadow Boxes",
        path: "/cosmetic-packaging/eyeshadow-boxes",
      },
      {
        name: "Custom Face Serum Boxes",
        path: "/cosmetic-packaging/face-serum-boxes",
      },
      {
        name: "Custom Hair Extension Boxes",
        path: "/cosmetic-packaging/hair-extension-boxes",
      },
      {
        name: "Custom Lip Balm Boxes",
        path: "/cosmetic-packaging/lip-balm-boxes",
      },
      {
        name: "Custom Lipstick Boxes",
        path: "/cosmetic-packaging/lipstick-boxes",
      },
      {
        name: "Custom Nail Polish Boxes",
        path: "/cosmetic-packaging/nail-polish-boxes",
      },
      {
        name: "Custom Foundation Boxes",
        path: "/cosmetic-packaging/foundation-boxes",
      },
      {
        name: "Custom Lip Gloss Boxes",
        path: "/cosmetic-packaging/lip-gloss-boxes",
      },
      {
        name: "Custom Mascara Boxes",
        path: "/cosmetic-packaging/mascara-boxes",
      },
      {
        name: "Beard Balm Boxes",
        path: "/cosmetic-packaging/beard-balm-boxes",
      },
      { name: "Body Oil Boxes", path: "/cosmetic-packaging/body-oil-boxes" },
      {
        name: "Cosmetic Sleeves Packaging",
        path: "/cosmetic-packaging/sleeves-packaging",
      },
      {
        name: "Eyelash Glue Boxes",
        path: "/cosmetic-packaging/eyelash-glue-boxes",
      },
      { name: "Face Wash Boxes", path: "/cosmetic-packaging/face-wash-boxes" },
      {
        name: "Face Wash Bar Boxes",
        path: "/cosmetic-packaging/face-wash-bar-boxes",
      },
      {
        name: "Hair Products Boxes",
        path: "/cosmetic-packaging/hair-products-boxes",
      },
      {
        name: "Hair Spray Boxes",
        path: "/cosmetic-packaging/hair-spray-boxes",
      },
      { name: "Lip Liner Boxes", path: "/cosmetic-packaging/lip-liner-boxes" },
      {
        name: "Subscription Boxes",
        path: "/cosmetic-packaging/subscription-boxes",
      },
    ],

    "Custom Stickers & Decals": [
      {
        name: "Custom CBD Stickers & Labels",
        path: "/custom-stickers/cbd-stickers",
      },
      {
        name: "Custom Clear Stickers",
        path: "/custom-stickers/clear-stickers",
      },
      {
        name: "Custom Vinyl Stickers & Decals",
        path: "/custom-stickers/vinyl-stickers",
      },
      {
        name: "Custom Die Cut Stickers & Decals",
        path: "/custom-stickers/die-cut-stickers",
      },
      {
        name: "Double Sided Stickers",
        path: "/custom-stickers/double-sided-stickers",
      },
      {
        name: "Custom Pro Cut Stickers & Vinyl Decals",
        path: "/custom-stickers/pro-cut-stickers",
      },
      {
        name: "Custom Lettering Stickers",
        path: "/custom-stickers/lettering-stickers",
      },
    ],

    "Woven Labels": [
      { name: "Custom Brand Woven Labels", path: "/woven-labels/brand-labels" },
      {
        name: "Center Fold Woven Labels",
        path: "/woven-labels/center-fold-labels",
      },
      { name: "Custom Hem Labels", path: "/woven-labels/hem-labels" },
      { name: "Custom Text Woven Labels", path: "/woven-labels/text-labels" },
      { name: "Custom Woven Logo Labels", path: "/woven-labels/logo-labels" },
    ],

    "Custom Box Styles": [
      {
        name: "Custom Reverse Tuck Style Boxes",
        path: "/custom-box-styles/reverse-tuck-boxes",
      },
      {
        name: "Counter Display Boxes",
        path: "/custom-box-styles/counter-display-boxes",
      },
      {
        name: "1-2-3 Bottom Trays",
        path: "/custom-box-styles/123-bottom-trays",
      },
      { name: "Custom Gable Bags", path: "/custom-box-styles/gable-bags" },
      {
        name: "Custom Roll End Tuck Top Boxes (RETT)",
        path: "/custom-box-styles/rett-boxes",
      },
      {
        name: "Angled Roll Side Tray",
        path: "/custom-box-styles/angled-roll-side-tray",
      },
      { name: "Custom Hexagon Box", path: "/custom-box-styles/hexagon-box" },
      {
        name: "Seal End Auto Bottom Boxes",
        path: "/custom-box-styles/seal-end-auto-bottom-boxes",
      },
      { name: "Gable Box", path: "/custom-box-styles/gable-box" },
      { name: "Paper Brief Case", path: "/custom-box-styles/paper-brief-case" },
      { name: "Sleeve & Tray Box", path: "/custom-box-styles/sleeve-tray-box" },
      { name: "4 Corner Box", path: "/custom-box-styles/4-corner-box" },
      { name: "6 Corner Box", path: "/custom-box-styles/6-corner-box" },
      { name: "Bookend Boxes", path: "/custom-box-styles/bookend-boxes" },
      { name: "Double Wall Lid", path: "/custom-box-styles/double-wall-lid" },
      { name: "Double Wall Tray", path: "/custom-box-styles/double-wall-tray" },
      { name: "Fence Partitions", path: "/custom-box-styles/fence-partitions" },
      {
        name: "Five Panel Hanger Box",
        path: "/custom-box-styles/five-panel-hanger-box",
      },
      { name: "Foot Lock Tray", path: "/custom-box-styles/foot-lock-tray" },
      {
        name: "Four Pack Bottle Carrier",
        path: "/custom-box-styles/four-pack-bottle-carrier",
      },
      {
        name: "Gravity Feed Dispenser Box",
        path: "/custom-box-styles/gravity-feed-dispenser-box",
      },
      {
        name: "Half Slotted Container",
        path: "/custom-box-styles/half-slotted-container",
      },
      {
        name: "Custom Perforated Dispenser Style Boxes",
        path: "/custom-box-styles/perforated-dispenser-boxes",
      },
      {
        name: "Custom Pillow Style Boxes",
        path: "/custom-box-styles/pillow-style-boxes",
      },
      {
        name: "Custom Pillow Box Envelope Style Boxes",
        path: "/custom-box-styles/pillow-box-envelope",
      },
      { name: "Punch Partitions", path: "/custom-box-styles/punch-partitions" },
      {
        name: "Regular Slotted Container",
        path: "/custom-box-styles/regular-slotted-container",
      },
      {
        name: "Custom Seal End Style Boxes",
        path: "/custom-box-styles/seal-end-style-boxes",
      },
      {
        name: "Self Lock Cake Boxes",
        path: "/custom-box-styles/self-lock-cake-boxes",
      },
      {
        name: "Six Pack Bottle Carrier",
        path: "/custom-box-styles/six-pack-bottle-carrier",
      },
      {
        name: "Straight Tuck Box",
        path: "/custom-box-styles/straight-tuck-box",
      },
      { name: "Two Piece Box", path: "/custom-box-styles/two-piece-box" },
      {
        name: "Tuck and Display Box",
        path: "/custom-box-styles/tuck-display-box",
      },
      {
        name: "Tuck and Tongue Box",
        path: "/custom-box-styles/tuck-tongue-box",
      },
      {
        name: "Tuck Top Auto Bottom Box",
        path: "/custom-box-styles/tuck-top-auto-bottom-box",
      },
      {
        name: "Tuck Top Snap Bottom Box",
        path: "/custom-box-styles/tuck-top-snap-bottom-box",
      },
    ],

    "Custom Pillow Packaging Boxes": [
      {
        name: "Custom Handle Pillow Boxes",
        path: "/pillow-packaging/handle-boxes",
      },
      { name: "Custom Pillow Boxes", path: "/pillow-packaging/pillow-boxes" },
      {
        name: "Custom Window Pillow Boxes",
        path: "/pillow-packaging/window-boxes",
      },
      {
        name: "Custom Holographic Pillow Boxes",
        path: "/pillow-packaging/holographic-boxes",
      },
      { name: "Black Pillow Boxes", path: "/pillow-packaging/black-boxes" },
      {
        name: "Custom Pillow Gift Boxes",
        path: "/pillow-packaging/gift-boxes",
      },
      {
        name: "Custom Handle Pillow Style Boxes",
        path: "/pillow-packaging/handle-style-boxes",
      },
      {
        name: "Merry Christmas Pillow Boxes",
        path: "/pillow-packaging/christmas-boxes",
      },
      {
        name: "Custom Large Pillow Boxes",
        path: "/pillow-packaging/large-boxes",
      },
      {
        name: "Custom Clear Pillow Boxes",
        path: "/pillow-packaging/clear-boxes",
      },
      {
        name: "Custom Kraft Pillow Boxes",
        path: "/pillow-packaging/kraft-boxes",
      },
      { name: "Foiled Pillow Boxes", path: "/pillow-packaging/foiled-boxes" },
      {
        name: "Custom Standing Pillow Boxes",
        path: "/pillow-packaging/standing-boxes",
      },
      { name: "Custom Pillow Box Mailers", path: "/pillow-packaging/mailers" },
      { name: "Small Pillow Boxes", path: "/pillow-packaging/small-boxes" },
    ],

    "Gift Packaging Boxes": [
      { name: "Custom Favor Boxes", path: "/gift-packaging/favor-boxes" },
    ],

    "Soap Packaging Boxes": [
      {
        name: "Custom Luxury Soap Boxes",
        path: "/soap-packaging/luxury-soap-boxes",
      },
      { name: "Soap Gift Boxes", path: "/soap-packaging/gift-boxes" },
      {
        name: "Custom Die Cut Soap Boxes",
        path: "/soap-packaging/die-cut-soap-boxes",
      },
      {
        name: "Wholesale Handmade Soap Boxes",
        path: "/soap-packaging/wholesale-handmade-boxes",
      },
      {
        name: "Custom Printed Soap Sleeves",
        path: "/soap-packaging/printed-soap-sleeves",
      },
      {
        name: "Custom Kraft Soap Boxes",
        path: "/soap-packaging/kraft-soap-boxes",
      },
      { name: "Custom Bar Soap Boxes", path: "/soap-packaging/bar-soap-boxes" },
      {
        name: "Custom Black Soap Boxes",
        path: "/soap-packaging/black-soap-boxes",
      },
      {
        name: "Custom White Soap Boxes",
        path: "/soap-packaging/white-soap-boxes",
      },
    ],

    "Custom Medicine Packaging": [
      {
        name: "Custom Face Mask Boxes",
        path: "/medicine-packaging/face-mask-boxes",
      },
      {
        name: "Custom Dental Floss Boxes",
        path: "/medicine-packaging/dental-floss-boxes",
      },
      {
        name: "Vial Glass Bottle Boxes",
        path: "/medicine-packaging/vial-glass-bottle-boxes",
      },
      {
        name: "Custom Hand Sanitizer Boxes",
        path: "/medicine-packaging/hand-sanitizer-boxes",
      },
    ],

    "Christmas Boxes": [
      {
        name: "Custom Christmas Gift Boxes",
        path: "/christmas-boxes/gift-boxes",
      },
      {
        name: "Custom Christmas Cake Boxes",
        path: "/christmas-boxes/cake-boxes",
      },
      {
        name: "Custom Christmas Apple Boxes",
        path: "/christmas-boxes/apple-boxes",
      },
      {
        name: "Custom Christmas Gable Boxes",
        path: "/christmas-boxes/gable-boxes",
      },
      {
        name: "Custom Christmas Favor Boxes",
        path: "/christmas-boxes/favor-boxes",
      },
      {
        name: "Custom Christmas Window Boxes",
        path: "/christmas-boxes/window-boxes",
      },
      {
        name: "Christmas Ornament Boxes",
        path: "/christmas-boxes/ornament-boxes",
      },
      { name: "Christmas Treat Boxes", path: "/christmas-boxes/treat-boxes" },
      { name: "Christmas Cookie Boxes", path: "/christmas-boxes/cookie-boxes" },
      {
        name: "Christmas Cupcake Boxes",
        path: "/christmas-boxes/cupcake-boxes",
      },
    ],

    Blogs: [
      { name: "Cosmetic Packaging", path: "/blogs/cosmetic-packaging" },
      { name: "Soap Packaging Boxes", path: "/blogs/soap-packaging" },
      { name: "CBD Packaging", path: "/blogs/cbd-packaging" },
      { name: "Custom Packaging Boxes", path: "/blogs/custom-packaging" },
      {
        name: "Custom Retail Packaging",
        path: "/blogs/custom-retail-packaging",
      },
      { name: "Food Packaging", path: "/blogs/food-packaging" },
      { name: "Rigid Boxes", path: "/blogs/rigid-boxes" },
    ],

    "Cosmetic Packaging": [
      {
        name: "Custom Eyeliner Boxes for Makeup Enthusiasts",
        path: "/cosmetic-packaging/eyeliner-boxes",
      },
      {
        name: "With Custom Mascara Packaging Adding Little Mascara To Your Lashes Beautifies It",
        path: "/cosmetic-packaging/mascara-packaging",
      },
      {
        name: "Help Your Business To Boost Itself With Custom Essential Oil Boxes",
        path: "/cosmetic-packaging/essential-oil-boxes",
      },
      {
        name: "Custom Cream Boxes: Elevate Your Brand With Luxury And Quality",
        path: "/cosmetic-packaging/cream-boxes",
      },
      {
        name: "Boost Sales With 7 Innovative Custom Lip Gloss Box Ideas",
        path: "/cosmetic-packaging/lip-gloss-ideas",
      },
      {
        name: "Mastering The Art Of Lipstick Packaging Customization: Your Comprehensive Guide",
        path: "/cosmetic-packaging/lipstick-packaging-guide",
      },
      {
        name: "Hair Extension Packaging Psychology: What Grabs Your Audience's Attention",
        path: "/cosmetic-packaging/hair-extension-packaging",
      },
      {
        name: "10 Strategic Tips For Enhancing Cosmetic Sleeves Packaging",
        path: "/cosmetic-packaging/sleeves-packaging-tips",
      },
      {
        name: "The Ultimate Guide To Custom Mascara Boxes For Beauty Brands",
        path: "/cosmetic-packaging/mascara-boxes-guide",
      },
    ],

    "Soap Packaging Boxes": [
      {
        name: "Custom Soap Packaging Boxes Your Ultimate Solution!",
        path: "/soap-packaging/ultimate-solution",
      },
      {
        name: "Why Do You Need Kraft Soap Packaging For Your Brand",
        path: "/soap-packaging/kraft-need",
      },
      {
        name: "Garner A Lot Of Attention With Soap Boxes For Homemade Soap As Easy As Pie",
        path: "/soap-packaging/homemade-soap",
      },
      {
        name: "Let Soap For A Good Day With Custom Window Soap Boxes",
        path: "/soap-packaging/window-soap-boxes",
      },
      {
        name: "8 Great Reasons For Picking Eye-Catching Custom Soap Boxes",
        path: "/soap-packaging/eye-catching-reasons",
      },
      {
        name: "7 Expert Tips to Prevent Glass Breakage with Custom Bottle Boxes",
        path: "/soap-packaging/prevent-breakage",
      },
      {
        name: "7 Luxury Soap Packaging Ideas To Try In 2023",
        path: "/soap-packaging/luxury-ideas",
      },
      {
        name: "How Custom Soap Boxes Attract More Customers",
        path: "/soap-packaging/attract-customers",
      },
      {
        name: "Hany Tip To Get Right Size Custom Boxes For Soap Bars",
        path: "/soap-packaging/right-size-boxes",
      },
    ],

    "CBD Packaging": [
      {
        name: "Appealing Custom Cigarette Boxes For Your Brand With Secure Packaging",
        path: "/cbd-packaging/cigarette-boxes",
      },
      {
        name: "Custom Hemp Candle Boxes With Resplendent Designs",
        path: "/cbd-packaging/hemp-candle-boxes",
      },
      {
        name: "Unique Custom Cannabis Concentrate Packaging That Helps You To Grow",
        path: "/cbd-packaging/cannabis-concentrate",
      },
      {
        name: "Marijuana Concentrate Packaging That Keeps The Product Fresh For A Long Time",
        path: "/cbd-packaging/marijuana-concentrate",
      },
      {
        name: "With Custom Tea Boxes Everything Is Possible",
        path: "/cbd-packaging/custom-tea-boxes",
      },
      {
        name: "Get Exceptional Growth With Chewing Gum Boxes",
        path: "/cbd-packaging/chewing-gum-boxes",
      },
      {
        name: "Don't Confuse Being Stimulating Custom Blunt Boxes With Being Blunt",
        path: "/cbd-packaging/blunt-boxes",
      },
      {
        name: "Boost Your Vape Cartridge Packaging Through Re-branding",
        path: "/cbd-packaging/vape-cartridge",
      },
      {
        name: "Elevate Your Brand with Custom CBD Boxes: Stand Out in Style!",
        path: "/cbd-packaging/elevate-brand",
      },
      {
        name: "Unveiling The Ultimate Pre Roll Packaging Solutions!",
        path: "/cbd-packaging/pre-roll-solutions",
      },
      {
        name: "The Ultimate Guide for Custom Printed CBD Oil Boxes",
        path: "/cbd-packaging/cbd-oil-guide",
      },
      {
        name: "How Can CBD Packaging Help Your Business?",
        path: "/cbd-packaging/business-help",
      },
    ],

    "Custom Packaging Boxes": [
      {
        name: "Get Maximum Benefit From Cheap Custom Printed Packaging Boxes Wholesale",
        path: "/custom-packaging/maximum-benefit",
      },
      {
        name: "Popular Packaging Boxes That Can Transform Your Brand | 2023 Guide",
        path: "/custom-packaging/popular-boxes",
      },
      {
        name: "The Magic of Christmas Gift Boxes: An Overview",
        path: "/custom-packaging/christmas-gift-boxes",
      },
      {
        name: "Exploring Unique Packaging Concepts For Christmas Gift Boxes In 2023",
        path: "/custom-packaging/unique-concepts",
      },
      {
        name: "Using Kraft Boxes With Handles: That Are Sustainable For Packaging",
        path: "/custom-packaging/kraft-with-handles",
      },
      {
        name: "5 Best Options And Methods For Modern Mailer Boxes",
        path: "/custom-packaging/mailers-options",
      },
      {
        name: "What is The Role Of Kraft Boxes With Window In Your Branding?",
        path: "/custom-packaging/kraft-window",
      },
      {
        name: "Gable Boxes: Understanding Their Features And Popular Uses",
        path: "/custom-packaging/gable-boxes",
      },
      {
        name: "Why Do We Need Custom Printed Medicine Box Packaging?",
        path: "/custom-packaging/medicine-boxes",
      },
      {
        name: "Things You Must Consider Before Buying A Gift Box In 2023",
        path: "/custom-packaging/gift-box-tips",
      },
      {
        name: "Strategies for Using Clear Stickers in Branding",
        path: "/custom-packaging/clear-sticker-strategies",
      },
      {
        name: "What Is A Dieline? How To Make A Dieline For Packaging and Printing",
        path: "/custom-packaging/dieline-guide",
      },
      {
        name: "How To Get Custom Packaging For Small Businesses?",
        path: "/custom-packaging/small-business",
      },
      {
        name: "Reasons Your Business Needs Custom Product Boxes",
        path: "/custom-packaging/custom-product-boxes",
      },
      {
        name: "What is Offset Printing?",
        path: "/custom-packaging/offset-printing",
      },
      {
        name: "How To Build a Brand Identity Through Custom Packaging?",
        path: "/custom-packaging/brand-identity",
      },
      {
        name: "Perforated Packaging - Importance And Benefits",
        path: "/custom-packaging/perforated-packaging",
      },
      {
        name: "Custom Packaging Mistakes That Can Damage Your Branding",
        path: "/custom-packaging/packaging-mistakes",
      },
      {
        name: "Cost-Effective Candle Packaging Ideas For Business",
        path: "/custom-packaging/candle-packaging-ideas",
      },
      {
        name: "Best Vape Cartridge Packaging Boxes For 0.5ml & 1ml Vape Carts",
        path: "/custom-packaging/vape-cartridge-packaging",
      },
      {
        name: "Best & Modern Sleek Packaging For 20 Incense Sticks",
        path: "/custom-packaging/incense-packaging",
      },
    ],

    "Custom Retail Packaging": [
      {
        name: "Give a Magnificent Touch to your Custom Printed Candle Boxes and Generate more Sales",
        path: "/retail-packaging/candle-boxes-sales",
      },
      {
        name: "Custom Bath Bomb Packaging Boxes Enhance Your Sales With Style",
        path: "/retail-packaging/bath-bomb",
      },
      {
        name: "Stunning Designs For Custom Face Mask Boxes Wholesale That Represents Your Product Aesthetically",
        path: "/retail-packaging/face-mask-designs",
      },
      {
        name: "Surround Yourself With Custom Candy Packaging, Not Negativity",
        path: "/retail-packaging/candy-packaging",
      },
      {
        name: "The Power Of Custom Candle Boxes In Marketing",
        path: "/retail-packaging/candle-marketing",
      },
      {
        name: "Start Bringing Your Aromas With Stunning Incense Packaging Solutions!",
        path: "/retail-packaging/incense-solutions",
      },
      {
        name: "Luxury Custom Pillow Boxes: 5 Stunning Benefits That Stand Out",
        path: "/retail-packaging/pillow-boxes",
      },
      {
        name: "Custom Mug Boxes: The Journey from Standard to Spectacular",
        path: "/retail-packaging/mug-boxes",
      },
      {
        name: "Eco-Friendly Packaging: 9 Sustainable Packaging Ideas For 2023",
        path: "/retail-packaging/eco-friendly-ideas",
      },
      {
        name: "Wholesale Phone Charger Boxes To Increase Sales: Expert Tips",
        path: "/retail-packaging/charger-boxes",
      },
      {
        name: "The Complete Ultimate Guide of Luxury Marble Boxes Wholesale",
        path: "/retail-packaging/marble-boxes",
      },
      {
        name: "How to Create Custom Incense Boxes That Sell?",
        path: "/retail-packaging/create-incense-boxes",
      },
    ],

    "Food Packaging": [
      {
        name: "Get Custom Printed Burger Boxes To Make Your Product Unique From The Rest",
        path: "/food-packaging/burger-boxes",
      },
      {
        name: "Hit The Sweet Spot With Custom Printed Burger Boxes And Grab Attention",
        path: "/food-packaging/burger-boxes-attention",
      },
      {
        name: "The Rising Trend Of Burger Boxes Wholesale",
        path: "/food-packaging/burger-boxes-wholesale",
      },
      {
        name: "Crunching Creativity: Custom Cereal Boxes That Pop!",
        path: "/food-packaging/cereal-boxes",
      },
      {
        name: "Unbox Sweet Success With Wholesale Bakery Boxes",
        path: "/food-packaging/bakery-boxes",
      },
      {
        name: "Custom Cookie Boxes: Elevating Your Bakery's Branding And Sales",
        path: "/food-packaging/cookie-boxes",
      },
      {
        name: "Master The Art Of Creating Your Signature Custom Chocolate Boxes",
        path: "/food-packaging/chocolate-boxes",
      },
      {
        name: "Personalized Donut Boxes Encased In Luxurious Perfection",
        path: "/food-packaging/donut-boxes",
      },
      {
        name: "Top 6 Custom Macaron Boxes With Eco-Friendly Elegance",
        path: "/food-packaging/macaron-boxes",
      },
      {
        name: "Exploring the World of Coffee Boxes: Types and Varieties",
        path: "/food-packaging/coffee-boxes",
      },
      {
        name: "Savor the Moment: Crafting Unique Candy Box Packaging",
        path: "/food-packaging/candy-boxes",
      },
      {
        name: "8 Benefits Of Using Crepe Cone Holders For Packaging",
        path: "/food-packaging/crepe-cone-holders",
      },
      {
        name: "How To Choose The Right Food Trays Boxes For Your Needs",
        path: "/food-packaging/food-trays",
      },
      {
        name: "Ultimate Guide To Sustainable Food Packaging Sleeves Boxes",
        path: "/food-packaging/sustainable-packaging",
      },
      {
        name: "What Is The Importance Of Sustainable Food Packaging?",
        path: "/food-packaging/importance-sustainable",
      },
      {
        name: "10 Reasons To Love Custom Cereal Boxes",
        path: "/food-packaging/reasons-love-cereal",
      },
    ],

    "Rigid Boxes": [
      {
        name: "Luxury Boxes Wholesale Gives The Joy Of Living",
        path: "/rigid-boxes/luxury-wholesale",
      },
      {
        name: "Satin Lined Boxes: Elevating Packaging to a New Level",
        path: "/rigid-boxes/satin-lined",
      },
      {
        name: "Unlocking The Elegance: The Art And Advantages Of Rigid Boxes",
        path: "/rigid-boxes/elegance-advantages",
      },
      {
        name: "5 Essential Tips for Selecting The Perfect Jewelry Boxes",
        path: "/rigid-boxes/jewelry-tips",
      },
      {
        name: "Unveiling Custom Wallet Boxes: Inspired By Style And Creativity",
        path: "/rigid-boxes/wallet-boxes",
      },
    ],
    "Custom Hang Tags": [],

    "Woven Embroidered Patches": [],
    "Corrugated Boxes": [],

    "Kraft Paper Boxes": [],

    "Custom Display Boxes": [],

    "Custom Mailer Boxes": [],

    "Cardboard Boxes": [],
    "Eco-Friendly Packaging": [],
  };

  return (
    <div className="sitemap-container">
      <div className="sitemap-section">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6} className="sitemap-col">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/sitemap">Sitemap</Link>
            </p>
          </Col>
          <Col xs={24} sm={12} md={6} className="sitemap-col">
            <p>
              <Link to="/about">About Us</Link>
            </p>
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
          </Col>
          <Col xs={24} sm={12} md={6} className="sitemap-col">
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
            <p>
              <Link to="/terms">Terms and Conditions</Link>
            </p>
          </Col>
          <Col xs={24} sm={12} md={6} className="sitemap-col">
            <p>
              <Link to="/portfolio">Portfolio</Link>
            </p>
          </Col>
        </Row>
      </div>

      <div className="sitemap-section">
        <Row gutter={[16, 16]} style={{ textAlign: "left" }}>
          <Col span={24}>
            <h2 className="sitemap-title">All Products</h2>
          </Col>
          {Object.entries(items).map(([heading, products], index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <h3 className="sitemap-category">{heading}</h3>
              {products.map((item, colIndex) => (
                <div
                  key={colIndex}
                  className="sitemap-item"
                  style={{ marginBottom: "8px" }}
                >
                  <Link to={item.path}>{item.name}</Link>
                </div>
              ))}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Sitemap;
