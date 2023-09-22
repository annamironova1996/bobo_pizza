import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';

interface HeaderProps {
    onCartClick: () => void;
    onRegisterClick: () => void;
    onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
    onCartClick,
    onRegisterClick,
    onLoginClick,
}) => {
    const { items, totalPrice } = useSelector(selectCart);

    const totalCount = items.reduce((sum: number, item) => {
        return item.count + sum;
    }, 0);

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__row-left">
                        <Link
                            to="/"
                            className="logo"
                        >
                            <div className="logo__wrapper">
                                <img
                                    src="img/icons/logo.svg"
                                    width={50}
                                    height={50}
                                    alt="логотип"
                                />
                            </div>

                            <div>
                                <h1>БОБО ПИЦЦА</h1>
                                <p>Сеть пиццерий №1 в России</p>
                            </div>
                        </Link>
                        <div className="header__wrapperBtn">
                            <button
                                onClick={onLoginClick}
                                type="button"
                            >
                                Войти
                            </button>

                            <button
                                onClick={onRegisterClick}
                                type="button"
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>

                    <div className="header__nav">
                        <Link
                            className="transparent-btn"
                            to="/delivery"
                        >
                            Доставка
                        </Link>
                        <button onClick={onCartClick}>
                            {totalCount}/{totalPrice} руб.
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
