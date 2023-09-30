import React from "react";
import logo from "../../src/Shop App.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { carts } = useSelector((state) => state.allProducts);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to={"/"}>
            <img
              src={logo}
              style={{ width: "100%", height: "80px", marginLeft: "15px" }}
              alt=""
            />
          </Link>
          <Link to={"/cart"}>
            <button
              class="btn btn-outline-success"
              type="submit"
              style={{ marginRight: "10px" }}
            >
              Cart : {carts.length}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
