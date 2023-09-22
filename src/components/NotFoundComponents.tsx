import { Link } from 'react-router-dom';

const NotFoundComponents = () => {
    return (
        <div className="not-found__components">
            <img
                src="img/box.png"
                alt="коробка с пиццей"
            />
            <p>К сожалению, такой страницы не существует!</p>
            <Link
                className="transparent-btn"
                to="/"
            >
                Вернуться на главную страницу
            </Link>
        </div>
    );
};

export default NotFoundComponents;
