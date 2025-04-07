import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa"; // Import FaCaretDown
import "./mnav.css";

const Mnav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust this value based on your first nav height
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = () => {
    setDropdownVisible(false);
    setIsOpen(false);
  };

  // Dropdown menu items with images
  const dropdownItems = [
    {
      path: "/custom-Retail-Packaging",
      img: "../images/nav1.png",
      alt: "Custom Retail Packaging",
      text: "Custom Retail Packaging",
    },
    {
      path: "/rigid-boxes",
      img: "../images/nav2.png",
      alt: "Rigid Boxes",
      text: "Rigid Boxes",
    },
    {
      path: "/food-package",
      img: "../images/nav3.png",
      alt: "Food Packaging",
      text: "Food Packaging",
    },
    {
      path: "/cosmetic-packaging-boxes",
      img: "../images/nav4.png",
      alt: "Cosmetic Packaging",
      text: "Cosmetics Packaging",
    },
    {
      path: "/sustain",
      img: "../images/nav5.png",
      alt: "Eco-Friendly Packaging",
      text: "Eco-Friendly Packaging",
    },
    {
      path: "/pillow",
      img: "../images/nav6.png",
      alt: "Custom Pillow Packaging",
      text: "Custom Pillow Packaging",
    },
    {
      path: "/giftBox",
      img: "../images/nav7.png",
      alt: "Gift Packaging",
      text: "Gift Packaging",
    },
    {
      path: "/soap",
      img: "../images/nav8.png",
      alt: "Soap Packaging",
      text: "Soap Packaging",
    },
    {
      path: "/medical",
      img: "../images/nav9.png",
      alt: "Custom Medicine Packaging",
      text: "Custom Medicine Packaging",
    },
    {
      path: "/hangTags",
      img: "../images/nav10.png",
      alt: "Custom Hang Tags",
      text: "Custom Hang Tags",
    },
    {
      path: "/wovenPatches",
      img: "../images/nav11.png",
      alt: "Woven Embroidered Patches",
      text: "Woven Embroidered Patches",
    },
    {
      path: "/corrugatedBoxes",
      img: "../images/nav4.png",
      alt: "Corrugated Boxes",
      text: "Corrugated Boxes",
    },
    {
      path: "/kraftPaper",
      img: "../images/nav4.png",
      alt: "Kraft Paper Boxes",
      text: "Kraft Paper Boxes",
    },
    {
      path: "/customDisplay",
      img: "../images/nav4.png",
      alt: "Custom Display Boxes",
      text: "Custom Display Boxes",
    },
    {
      path: "/customMailer",
      img: "../images/nav4.png",
      alt: "Custom Mailer Boxes",
      text: "Custom Mailer Boxes",
    },
  ];

  const dropdownMenu = (
    <div className="mnav-dropdown-container">
      <div className="mnav-dropdown-grid">
        {dropdownItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="mnav-dropdown-item"
            onClick={handleDropdownItemClick}
          >
            <img src={item.img} alt={item.alt} className="mnav-dropdown-img" />
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className={`mnav-navbar ${isSticky ? "sticky" : ""}`}>
      <div className="mnav-container">
        {/* Logo */}
        <Link to="/" className="mnav-logo-container">
          <img
            src="../images/sire logo.png"
            alt="Sire Printing"
            className="mnav-logo"
          />
        </Link>

        {/* Mobile menu button */}
        <button className="mnav-mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation items */}
        <div className={`mnav-menu ${isOpen ? "mnav-active" : ""}`}>
          <Link
            to="/all-products"
            className="mnav-item"
            onClick={() => setIsOpen(false)}
          >
            Custom Product Boxes
          </Link>
          <Link
            to="/cbd-packaging"
            className="mnav-item"
            onClick={() => setIsOpen(false)}
          >
            CBD Packaging
          </Link>

          <Dropdown
            overlay={dropdownMenu}
            trigger={["hover"]}
            overlayClassName="mnav-custom-dropdown"
            placement="bottomCenter"
            visible={dropdownVisible}
            onVisibleChange={(visible) => setDropdownVisible(visible)}
          >
            <div className="mnav-item mnav-dropdown-trigger">
              Custom Boxes <FaCaretDown /> {/* Adding the down arrow */}
            </div>
          </Dropdown>

          <Link
            to="/custom-box-styles"
            className="mnav-item"
            onClick={() => setIsOpen(false)}
          >
            Custom Box Styles
          </Link>
          <Link
            to="/custom-stickers"
            className="mnav-item"
            onClick={() => setIsOpen(false)}
          >
            Custom Stickers
          </Link>
          <Link
            to="/christmas-boxes"
            className="mnav-item"
            onClick={() => setIsOpen(false)}
          >
            Christmas Boxes
          </Link>
          <Link
            to="/gallery"
            className="mnav-item"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Mnav;
