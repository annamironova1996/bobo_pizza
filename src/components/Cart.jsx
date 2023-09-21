import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem';
import { clearItems, selectCart } from '../redux/slices/cartSlice';
import CartEmpty from './CartEmpty';

const Cart = ({ openCart, onClick }) => {
    const dispatch = useDispatch();
    const { totalPrice, items } = useSelector(selectCart);

    const totalCount = items.reduce((sum, item) => {
        return item.count + sum;
    }, 0);

    const onClickClear = () => {
        if (window.confirm('очистить корзину?')) {
            dispatch(clearItems());
        }
    };

    return (
        <section className={openCart ? 'overlayVisible' : 'overlay'}>
            <div className="cart">
                <AiOutlineClose
                    className="cart__close"
                    onClick={onClick}
                />
                <div className="cart__wrapper">
                    {!totalPrice ? (
                        <CartEmpty />
                    ) : (
                        <>
                            {items.map((item) => {
                                return (
                                    <CartItem
                                        key={item.id}
                                        {...item}
                                    />
                                );
                            })}
                            <p>Всего товаров: {totalCount} шт.</p>
                            <p>Сумма заказа: {totalPrice} руб.</p>
                            <button onClick={onClickClear}>
                                Очистить корзину
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Cart;
