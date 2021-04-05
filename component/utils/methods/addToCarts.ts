export const addToCarts = (item:itemInterface) => {
   axios.post('http://localhost:3000/api/carts',item)
};
