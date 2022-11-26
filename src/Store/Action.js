import { api } from "../api/api";


export const increment = (dispatch, payload) => {
  return dispatch({ type: "Increment", payload:payload });
};
export const decrement = (dispatch,payload) => {
  return dispatch({ type: "Decrement" , payload:payload});
};

export const homePageData = (dispatch) =>{
  api.get("/products").then((response)=>{
    dispatch({ type: "homeData" , payload:response.data});
  })
}
export const getProduct = (dispatch,id) =>{
  api.get(`/products/${id}`).then((response)=>{
      dispatch({type:"productDetail", payload:response.data});
  })
}