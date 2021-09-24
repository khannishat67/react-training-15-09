
const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product
})

const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    id
})
export {addProduct, removeProduct}