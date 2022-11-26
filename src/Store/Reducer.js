const initialState = { count: 1 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + action.payload,
      };
    case "Decrement":
        if(state.count>1){
            return {
                count: state.count - action.payload,
            }
        }
        case "homeData":
          return {
            products:action.payload
          }

          case "productDetail" : 
          return{
            productDetail : action.payload
          }
    default:
      return state;
  }
};
