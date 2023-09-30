import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { carts } = useSelector((state) => state.allProducts);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to={"/"}>
            <button class="navbar-brand" style={{ border: "none" }} href="#">
              Sidm09
            </button>
          </Link>
          <Link to={"/cart"}>
            <button class="btn btn-outline-success" type="submit">
              Cart : {carts.length}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
