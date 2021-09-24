export const addToCart = (product, quantity) => ({
    type:  'ADD_PRODUCT_TO_CART',
    product,
    quantity
})

export const removeFromCart = (id, quantity) => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    id,
    quantity
})
