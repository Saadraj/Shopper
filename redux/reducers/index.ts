import { itemInterface } from "../../component/utils/Interfaces";
import { cart } from "./cartReducer";
import { view } from "./ViewReducer";

const combineReducers =
    (slices: {
        [x: string]: (arg0: any, arg1: any) => any;
        cart?: (
            state: itemInterface[],
            action: { type: any; payload: any }
        ) => any[];
        view?: (
            state: itemInterface,
            action: { type: any; payload: any }
        ) => any;
    }) =>
    (state: any, action: any) =>
        Object.keys(slices).reduce(
            // use for..in loop, if you prefer it
            (acc, prop) => ({
                ...acc,
                [prop]: slices[prop](acc[prop], action),
            }),
            state
        );

const rootReducer = combineReducers({ cart, view });

export default rootReducer;
