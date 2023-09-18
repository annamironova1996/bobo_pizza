import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onCartClick }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link
                        to="/"
                        className="logo"
                    >
                        <div className="logo__wrapper">
                            <img
                                src="img/icons/logo.svg"
                                width={50}
                                height={50}
                                alt=""
                            />
                        </div>

                        <div>
                            <h1>БОБО ПИЦЦА</h1>
                            <p>Сеть пиццерий №1 в России</p>
                        </div>
                    </Link>
                    <div className="header__nav">
                        <Link>Доставка</Link>
                        <button onClick={onCartClick}>Корзина</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
