import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Login from './components/Login';
import NotFound from './components/NotFound';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import SearchResults from './components/SearchResults';
import { useUserToken } from './hooks/custom-hooks';
import {login} from './store/actions/user-actions';
import { fetchProducts } from './store/reducers/product-reducer';
const Header = () => {
  const token = useUserToken();
  return (
    <div className="header">
      <Link to="/"><h1>Shoppers</h1></Link>
      <Link to="/cart">Cart</Link>
      {
        token && <Link to="/login" onClick={() => localStorage.removeItem('userToken')}>Logout</Link>

      }
    </div>
  )
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useUserToken();
  useEffect(() => console.log(token))
  return (
    <Route {...rest} render={(props) => token ? <Component {...props} /> : <Redirect to="/login" />} />
  )
}
// if user is already logged in 
const AppBody = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* Public */}
        <Route path="/login" render={() => <Login />} />
        {/* Private */}
        <PrivateRoute path="/cart" component={Cart}></PrivateRoute>
        <PrivateRoute exact path="/products" component={Products}></PrivateRoute>
        <PrivateRoute exact path="/products/:id" component={ProductDetail}></PrivateRoute>
        <PrivateRoute path="/search-results" component={SearchResults}></PrivateRoute>
        <PrivateRoute exact path="/">
          <Redirect to="/products" />
        </PrivateRoute>
        <Route path="**" component={NotFound} />
      </Switch>
      {props.children}
    </Router>
  )
}
/* 
  1. Get access to the state
  2. Dispatch Actions
  3. Update the view based on the modified state
*/
function App(props) {
  return (
    <div>
      <AppBody>
        <h1>Hello World</h1>
      </AppBody>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.products,
  user: state.users.user
})
/**
 * Higher Order Function - It either takes another function as a parameter, or it returns another function
 */
export default connect(mapStateToProps)(App);
