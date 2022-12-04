import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [localData, setLocalData] = useState(); //we are not paasing initial value of localData here because at run time it will not update ,so we will pass it in useEffect
  const [cartValue, setCartValue] = useState();
  useEffect(() => {
    let cartInitial = 0;
    setLocalData(JSON.parse(localStorage.getItem("cartData")));

    const crtTotal =JSON.parse(localStorage.getItem("cartData"));
    if (crtTotal?.length > 0) {
      crtTotal.forEach((e) => {
        cartInitial += e.price * e.qty;
      });
    }
    setCartValue(cartInitial);
    // console.log("cartValue", cartValue);
    // console.log("in useeffect localData",localData)
  }, []);
  // console.log("outside useeffect localData",localData)

  const removeCartData = (id) => {
    var newArr = [...localData];
    newArr.forEach((element, index) => {
      if (element.id === id) {
        newArr.splice(index, 1);
      }
    });
    setLocalData(newArr);
    localStorage.setItem("cartData", JSON.stringify(newArr));
  };
  return (
    <>
      <Link to="/">go to home page</Link>
      <div>
        {localData?.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.title}</h2>
              <h3>price &euro;{item.price}</h3>
              <h4>qty --{item.qty}</h4>
              <h5>total price {item.price * item.qty}</h5>
              <button onClick={() => removeCartData(item.id)}>
                remove from cart
              </button>
            </div>
          );
        })}
        <h1>total cart value --{cartValue}</h1>
      </div>
    </>
  );
};

export default CartPage;
