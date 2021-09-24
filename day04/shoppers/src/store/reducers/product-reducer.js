import { axiosClient } from "../../config/axios"

export const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product]
        case 'ADD_ALL':
            return [...state, ...action.products]
        case 'REMOVE_PRODUCT':
            return state.filter(elem => elem.id !== action.id)
        default:
            return state
    }
}
export const fetchProducts =  async (dispatch) => {
    const res = await axiosClient.get('/products-recommendation')
    try {
        console.log('Data received');
        const data = res.data 
        dispatch({type: 'ADD_ALL', products: data})
    } catch(err) {
        console.error(err);
    }
}