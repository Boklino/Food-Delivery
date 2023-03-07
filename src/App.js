import { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useNavigate,
} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Payment from './components/Payment';

function App() {
	return (
		<div>
			<Link to='/'>home</Link>
			<Link to='/login'>login</Link>
			<Link to='/register'>register</Link>
			<Link to='/menu'>menu</Link>
			<Link to='/cart'>cart</Link>
			<Link to='/checkout'>checkout</Link>
			<Link to='/payment-success'>payment sucess</Link>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/payment-success' element={<Payment />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
