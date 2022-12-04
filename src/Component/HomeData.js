import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeData = (props) => {
    const item = props.item
    const [cartQty, setCartQty] = useState(1);
    const addCart = (item) => {
        item.qty = cartQty
        // localStorage.setItem('cartData' , JSON.stringify([item]));  //in this case the existing data was removed.so we use spread
        const localData = JSON.parse(localStorage.getItem("cartData")) || [];
        var x = 0;
        if (localData.length > 0) {
          localData.forEach((element) => {
            if (element.id === item.id) {
              x = true;
            }
          });
        }
        if (x === 0) {
          localStorage.setItem("cartData", JSON.stringify([...localData, item]));
        }
      };
      const increaseQty = () => {
        setCartQty(cartQty + 1);
      };
      const decreaseQty = () => {
        setCartQty(cartQty - 1);
      };
  return (
    <div>
      <Link to={`/product-detail/${item.id}`}>
        {item.title}
        <div>{item.price}</div>
      </Link>

      <button
        onClick={() => addCart(item)}
        style={{
          backgroundColor: "red",
          color: "#fff",
          padding: "10px",
          height: "50px",
          width: "150px",
        }}
      >
        Add to cart
      </button>
      <div style={{ display: "flex" }}>
        <button onClick={decreaseQty}>-</button>
        <div>qty value = {cartQty}</div>
        <button onClick={increaseQty}>+</button>
      </div>
    </div>
  );
};

export default HomeData;
