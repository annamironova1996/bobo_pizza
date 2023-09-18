import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Cart = ({ openCart, onClick }) => {
    return (
        <section className={openCart ? 'overlayVisible' : 'overlay'}>
            <div className="cart">
                <AiOutlineClose
                    className="cart__close"
                    onClick={onClick}
                />
                <div className="cart__wrapper">
                    <div className="cart__empty">
                        <img
                            src="img/cart.svg"
                            alt="пустая коробка"
                        />
                        <p>Ой, пусто!</p>
                        <span>
                            Ваша корзина пуста, откройте «Меню» и выберите
                            понравившийся товар. Мы доставим ваш заказ от 599 ₽
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
