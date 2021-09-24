import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { axiosClient } from '../config/axios'
import { addToCart } from '../store/actions/cart-actions'
import { fetchProducts } from '../store/reducers/product-reducer'
const Product = ({ product, addProductToCart, message, quantity: quant }) => {

    const [quantity, setQuantity] = useState(quant);
    const addProduct = () => {
        addProductToCart(quantity);
    }

    return (
        <div className="product">
            <Link to={`/products/${product.id}`}><p className="name">{product.name}</p></Link>
            <p className="price"><del className="old-price">${product.oldPrice}</del> ${product.price} <span className="discount">{Math.round((product.oldPrice - product.price) * 100 / product.oldPrice)}% off </span></p>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={addProduct}>Add To Cart</button>
            <small>{message}</small>
        </div>
    )
}
const Products = ({ header, cart = [], products=[] }) => {
    const [isError, setIsError] = useState(false)
    const history = useHistory();
    
    useEffect(() => {
        /*
            Promises work async, they promise to return some data "once"
            then
            catch
            finally
        */
       dispatch(fetchProducts);
        return () => {
            console.log('Component Unmounted');
        }
    }, [])

    const [searchText, setSearchText] = useState('');
    const search = () => {
        history.push(`/search-results?search=${searchText}`)
    }
    const dispatch = useDispatch();
    const addProductToCart = (prod, quantity) => {
        dispatch(addToCart(prod, quantity))
    }
    return (
        <div>
            <h1>{header}</h1>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} /><button onClick={search}>Search</button>
            <div className="product-container">

                {
                    products.length > 0 ?
                        products.map(prod => <Product key={prod.id} product={prod} addProductToCart={(quantity) => addProductToCart(prod, quantity)} quantity={(() => {
                            const item = cart.find(elem => elem.product.id === prod.id)
                            if (item) {
                                return item.quantity
                            }
                            return 0
                        })()} />)
                        : isError ? <div>Could not load products</div> : <div className="loader"></div>

                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.cart,
    products: state.products
})
// React Router doesn't take you to another new page, removes current component and loads another component into the view
export default connect(mapStateToProps)(Products)