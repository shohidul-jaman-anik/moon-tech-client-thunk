import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
    // console.log("current store", store.getState())
    // console.log("action", action)
    // return next(action);

    const state = store.getState()
    const cart = state.product.cart;

    if (action.type === ADD_TO_CART) {
        const newAction = {
            ...action,
            payload: { ...action.payload, cartPosition: cart.length }
        }
        return next(newAction);
    }
    return next(action)

}

export default cartCounter;
