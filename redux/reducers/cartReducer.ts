import { itemInterface } from "../../component/utils/Interfaces";
import { CART_DECREMENT, CART_INCREMENT } from "../actionTypes";

const initialState: itemInterface[] = [
    {
        src: "",
        product: "",
        price: 0,
        discount: 0,
    },
];
export const cart = (
    state = initialState,
    action: { type: any; payload: any }
) => {
    switch (action.type) {
        case CART_INCREMENT:
            return [...state, action.payload];
        case CART_DECREMENT:
            return [...state.filter((o) => o.src !== action.payload.src)];
        default:
            return state;
    }
};
