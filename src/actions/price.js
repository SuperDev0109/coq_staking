import { GET_BNBPRICE,GET_BITCOINPRICE, GET_ERROR } from './types';

export const getBnbPrice = () => async dispatch => {
    try {
        const result = await (await (fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT'))).json();
        const result_percent = await (await (fetch('https://api.binance.com/api/v1/ticker/24hr?symbol=BNBUSDT'))).json();
        const data = {
            price: result.price,
            price24: result_percent.priceChangePercent
        }
        dispatch({
            type: GET_BNBPRICE,
            payload: data
        })
    } catch (err) {
        console.log('call api error');
        // dispatch({
        //     type: GET_ERROR
        // })
    }
};

export const getBitcoinPrice = () => async dispatch => {
    try {
        const result = await (await (fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'))).json();
        const result_percent = await (await (fetch('https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT'))).json();
        const data = {
            price: result.price,
            price24: result_percent.priceChangePercent
        }
        dispatch({
            type: GET_BITCOINPRICE,
            payload: data
        })
    } catch (err) {
        console.log('call api error');
        // dispatch({
        //     type: GET_ERROR
        // })
    }
};
