import axios from "axios";
import { itemInterface } from "../Interfaces";

export const addToCarts = async(item:itemInterface) => {
   await axios.post('http://localhost:3000/api/carts',item)
};
