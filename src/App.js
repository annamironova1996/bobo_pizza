import './scss/app.scss';
import { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './components/Cart';

function App() {
    const [openCart, setOpenCart] = useState(false);

    return (
        <div className="App">
            <Cart
                openCart={openCart}
                onClick={() => setOpenCart(false)}
            />
            <Header onCartClick={() => setOpenCart(true)} />
            <Home />
        </div>
    );
}

export default App;
