import { cart } from "./cartReducer";
import { view } from "./ViewReducer";

const combineReducers = (slices) => (state, action) =>
    Object.keys(slices).reduce(
        // use for..in loop, if you prefer it
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action)
        }),
        state
    );

const rootReducer = combineReducers({ cart, view });

export default rootReducer;
