import { GET_BNBPRICE, GET_BITCOINPRICE } from '../actions/types';

const initialState = {
    bnb: '',
    bnb24: '',
    btc: '',
    btc24: ''
};

function priceReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BNBPRICE:
        return {
            ...state,
            bnb: payload.price,
            bnb24: payload.price24
          };
    case GET_BITCOINPRICE:
        return {
            ...state,
            btc: payload.price,
            btc24: payload.price24
        };
    default:
      return state;
  }
}

export default priceReducer;
