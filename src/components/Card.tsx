import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, selectCartItemId } from '../redux/slices/cartSlice';

const doughNames = ['тонкое, традиционное'];

interface CardProps {
    id: number;
    title: string;
    description: string;
    sizes: string[];
    img: string;
    dough: string[];
    price: number;
}

const Card: React.FC<CardProps> = ({
    id,
    title,
    description,
    sizes,
    img,
    dough,
    price,
}) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemId(id));
    const [activeDough, setActiveDough] = useState(0);
    const [activeSizes, setActiveSizes] = useState(0);

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            img,
            dough: doughNames[activeDough],
            activeSizes,
        };
        dispatch(addItem(item));
    };

    return (
        <article className="card">
            <img
                src={img}
                width={280}
                height={280}
                alt="пицца"
                title={description}
            />
            <h3 className="card__title">{title}</h3>
            <div className="card__options">
                <div className="cadr__dough">
                    {dough?.map((item, index) => {
                        return (
                            <button
                                onClick={() => setActiveDough(index)}
                                className={
                                    activeDough === index ? 'active' : ''
                                }
                                key={index}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
                <div className="card__sizes">
                    {sizes?.map((size, index) => {
                        return (
                            <button
                                onClick={() => setActiveSizes(index)}
                                className={
                                    activeSizes === index ? 'active' : ''
                                }
                                key={index}
                            >
                                {size}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="card__row">
                <span>от {price}₽</span>
                <button
                    onClick={onClickAdd}
                    className="transparent-btn"
                >
                    Добавить{addedCount > 0 && <span>{addedCount}</span>}
                </button>
            </div>
        </article>
    );
};

export default Card;
