import { CartType } from 'types/cart';
import { GET_CART, FETCH_CART, GET_PRODUCTS } from './types';
import { ProductType } from 'types/product';

type InitialStateProps = {
  cart: CartType[];
  fetchCart: void | null;
  products: ProductType[];
};

const initialState: InitialStateProps = {
  cart: [],
  fetchCart: null,
  products: [],
};

const appReducer = (state = initialState, { type, payload }: any = {}) => {
  switch (type) {
    case GET_CART:
      return {
        ...state,
        cart: payload,
      };
    case FETCH_CART:
      return {
        ...state,
        fetchCart: payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export default appReducer;
