import './scss/app.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './components/Cart';
import Delivery from './pages/Delivery';
import NotFoundPage from './pages/NotFoundPage';
import ModalWindowRegister from './components/modal-window/ModalWindowRegister';
import ModalWindowLogin from './components/modal-window/ModalWindowLogin';

function App() {
    const [openCart, setOpenCart] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    return (
        <div className="App">
            <Cart
                openCart={openCart}
                onClick={() => setOpenCart(false)}
            />
            <ModalWindowRegister
                registerOpen={registerOpen}
                onClick={() => setRegisterOpen(false)}
            />
            <ModalWindowLogin
                loginOpen={loginOpen}
                onClick={() => setLoginOpen(false)}
            />
            <Header
                onCartClick={() => setOpenCart(true)}
                onRegisterClick={() => setRegisterOpen(true)}
                onLoginClick={() => setLoginOpen(true)}
            />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/delivery"
                    element={<Delivery />}
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </div>
    );
}

export default App;
