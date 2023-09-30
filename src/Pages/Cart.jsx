import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveFromCart } from "../Redux/reducer/ProductSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.allProducts);

  const TotalPrice = carts.reduce(function (acc, curr) {
    acc = acc + curr.price * curr.quantity;
    return acc;
  }, 0);

  return (
    <section class="h-100">
      <div class="container py-2 h-100">
        <div class="row d-flex">
          <div class="">
            <div class="card" style={{ borderRadius: "15px" }}>
              <div class="card-body">
                <div>
                  <div>
                    <div class="p-5 ">
                      <div class="d-flex justify-content-between align-items-center ">
                        <h1 class="fw-bold">Shopping Cart</h1>
                        <h6 class="mb-0">{carts.length} items</h6>
                      </div>
                      <hr class="my-4" />
                      {carts && Object.keys(carts).length > 0 ? (
                        carts.map((item) => {
                          return (
                            <>
                              <div class="row mb-4 d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src={item.image}
                                    class="img-fluid rounded-3"
                                    alt=""
                                  ></img>
                                </div>

                                <div class="col-md-3 col-lg-3 col-xl-3">
                                  <h6 class="text-black">{item.title}</h6>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 ">
                                  {/* <button type="button" class="btn btn-light">
                                    +
                                  </button>

                                  <button type="button" class="btn btn-light">
                                    -
                                  </button> */}
                                  <h6>Quantity: {item.quantity}</h6>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2">
                                  <h6 class="text-black">{item.price}</h6>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1">
                                  <button>
                                    <i
                                      onClick={() =>
                                        dispatch(RemoveFromCart(item.id))
                                      }
                                      class="fas fa-times"
                                      style={{ cursor: "pointer" }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                              <hr class="my-4" />
                            </>
                          );
                        })
                      ) : (
                        <h2 className="text-center">Cart is Empty,Shop now!</h2>
                      )}

                      <div class="pt-5 d-flex">
                        <h6 class="">
                          <Link to={"/"}>
                            <i class="fas fa-long-arrow-alt-left me-2"></i>
                            Back to Shop
                          </Link>
                        </h6>
                        <h6 className="mx-auto">Total Value : {TotalPrice}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
