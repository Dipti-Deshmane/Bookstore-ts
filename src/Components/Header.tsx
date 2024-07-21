import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import booklogo from "./../Assets/book.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./../Style/header.scss";
import { BadgeOutlined } from "@mui/icons-material";

const Header = () => {
  const [showUserCard, setShowUserCard] = useState(false);

  const toggleUserCard = () => {
    setShowUserCard((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="headercontainer">
        <div className="logo-container">
          <img
            src={booklogo}
            style={{ backgroundColor: "red" }}
            alt="bookLogo"
            className="logo"
          />
          <h1 className="logoText">BookStore</h1>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        <div className="icons">
          <div className="profile">
            <PersonOutlineOutlinedIcon
              className="profile"
              fontSize="medium"
              style={{ cursor: "pointer", color: "white" }}
              onClick={toggleUserCard}
            />
          </div>
          {showUserCard && (
            <div className="user-card">
              <div className="user-info">
                <p className="username">Hello, Dipti</p>
              </div>
              <div className="cartOptions">
                <button>
                  <PersonOutlineOutlinedIcon fontSize="small" />{" "}
                  <span style={{ marginLeft: "2%" }}>Profile</span>
                </button>
                <button>
                  <ShoppingBagOutlinedIcon fontSize="small" />{" "}
                  <span style={{ marginLeft: "2%" }}>Profile My Orders</span>
                </button>
                <button>
                  <FavoriteBorderOutlinedIcon fontSize="small" />{" "}
                  <span style={{ marginLeft: "2%" }}>My Wishlist</span>
                </button>
                <button className="logoutbtn"> Logout</button>
              </div>

            </div>
          )}
          <div className="addCart">
            <ShoppingCartOutlinedIcon
              className="cart"
              style={{ cursor: "pointer", color: "white" }}
              fontSize="medium"
            />
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </header>
  );
};

export default Header;
