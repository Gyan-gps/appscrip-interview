import { GET_PRODUCTS } from "./action";

const initialValue = {
  products: null,
};

const productsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return { ...state };
  }
};

export default productsReducer;
