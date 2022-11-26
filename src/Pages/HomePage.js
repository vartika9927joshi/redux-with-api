import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, homePageData, increment } from "../Store/Action";
const HomePage = () => {
  const storeData = useSelector((state) => state.counterReducer.count);
  var productsData = useSelector((state) => state.counterReducer.products);
  const [state, setState] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    //useEffect runs  when produtData value chnge
    homePageData(dispatch);
   
  }, []);

  useEffect(()=>{
    setState(productsData);  //initially setting the state value for mapping
  },[productsData])

  useEffect(() => {
    //whenever the value of state change this useEffect will run
  }, [state]);

  const selectHandler = (e) => {
    if (e.target.value === "ascending") {
      const sortedData = productsData.sort((a, b) => {
        return a.price - b.price;
      });
      setState(sortedData);
    } else {
      const sortedData = productsData.sort((a, b) => {
        return b.price - a.price;
      });
      setState(sortedData);
    }
  };

  const findElement = (e) => {
    var newArr = [];
    for (var i = 0; i <= productsData.length-1; i++) {
        if (productsData[i]?.title.includes(e.target.value)) {
        newArr.push(productsData[i]);
      }
    }
    setState(newArr);
  };
  return (
    <>
      <div>
        <h1>hello first dummy practice app</h1>
        <button className="plus-btn" onClick={() => increment(dispatch, 5)}>
          +
        </button>
        {storeData}
        <button className="minus-btn" onClick={() => decrement(dispatch, 5)}>
          -
        </button>
      </div>
      <div className="home-page-data">
        <input type="text" placeholder="search item" onChange={findElement} />
        <div className="select">
          <select onChange={selectHandler}>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
        </div>
        {state?.map((item, index) => {
          return (
            <div>
              <Link to={`/product-detail/${item.id}`} key={index}>
                {item.title}
                <div>{item.price}</div>
              </Link>
              ;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
