import React, { useEffect } from "react";
import CartCount from "./Cart/CartCount";
import CartEmpty from "./Cart/CartEmpty";
import CartItem from "./Cart/CartItem";
import { setCloseCart } from "../app/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartState, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onCartToggle = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme 
            w-full h-screen opacity-100 z-[250] 
            ${
              cartState
                ? "opacity-100 visible translate-x-0"
                : "opacity-0   invisible  translate-x-8"
            }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount onCartToggle={onCartToggle} />
          {cartItems?.length === 0 ? (
            <CartEmpty />
          ) : (
            <div>
              <div
                className="flex items-start justify-start flex-col 
              gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scrool-hidden"
              >
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
