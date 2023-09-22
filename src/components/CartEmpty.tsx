const CartEmpty = () => {
    return (
        <div className="cart__empty">
            <img
                src="img/cart.svg"
                alt="пустая коробка"
            />
            <p>Ой, пусто!</p>
            <span>
                Ваша корзина пуста, откройте «Меню» и выберите понравившийся
                товар. Мы доставим ваш заказ от 599 ₽
            </span>
        </div>
    );
};

export default CartEmpty;
