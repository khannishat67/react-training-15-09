export const cartReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_PRODUCT_TO_CART': 
            return [...state, {product: action.product, quantity: action.quantity}]
        case 'REMOVE_PRODUCT_FROM_CART': 
            const updatedArray = state.map(elem => {
                if (elem.id === action.id) {
                    elem.quantity -= action.quantity
                }
                return elem
            }).filter(elem => elem.quantity > 0)
            return updatedArray
        default:
            return state
    }
}