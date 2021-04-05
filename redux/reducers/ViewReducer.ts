import { itemInterface } from "../../component/utils/Interfaces";
import { VIEW_DETAILS } from "../actionTypes";

const initialState: itemInterface = {
    src: "",
    product: "",
    price: 0,
    discount: 0
};

export const view = (state = initialState, action: { type: any; payload: any }) => {
    switch (action.type) {
        case VIEW_DETAILS:
            return action.payload;
        default:
            return state;
    }
};
