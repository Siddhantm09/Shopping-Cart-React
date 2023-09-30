import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddtoCart, fetchAllProducts } from "../Redux/reducer/ProductSlice";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const { products, loading, carts } = useSelector(
    (state) => state.allProducts
  );
  console.log(carts);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center mt-4">All Products</h1>
          {loading && <h2>Loading!!</h2>}
          {products &&
            products.map((item, id) => {
              return (
                <div
                  key={id}
                  class="card mx-auto my-4 "
                  style={{ width: "18rem" }}
                >
                  <img
                    src={item.image}
                    class="card-img-top img-responsive"
                    alt="img"
                  />
                  <div class="card-body ">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">${item.price}</p>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        onClick={() => dispatch(AddtoCart(item.id))}
                        className="btn btn-primary"
                      >
                        Add to Cart
                      </button>
                      <Link to={"/cart"}>
                        <button class="btn btn-outline-success" type="submit">
                          Go to cart
                        </button>
                      </Link>
                    </div>
                    <div className="cart-info">
                      <button onClick={dispatch(AddtoCart(item.id))}>+</button>
                      {/* <p>{curQuantity}</p> */}

                      {/* <button onClick={remove}>-</button> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
