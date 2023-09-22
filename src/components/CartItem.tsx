import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

export interface CartElem {
    id: number;
    title: string;
    sizes: string[];
    img: string;
    dough: string[];
    price: number;
    count: number;
}

const CartItem: React.FC<CartElem> = ({
    id,
    title,
    sizes,
    img,
    dough,
    price,
    count,
}) => {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            })
        );
    };
    const onClickMinus = () => {
        dispatch(minusItem(id));
    };

    const onClickRemove = () => {
        if (window.confirm('Действительно хотите удалить товар?')) {
            dispatch(removeItem(id));
        }
    };

    console.log(sizes);
    return (
        <article>
            <div className="cart-item">
                <img
                    src={img}
                    alt="изображение продукта"
                    width={100}
                />
                <h3>{title}</h3>
                <p>
                    {dough}
                    {sizes}
                </p>

                <b>{price * count}</b>
                <button onClick={onClickMinus}>-</button>
                <span>{count}</span>
                <button onClick={onClickPlus}>+</button>
                <button onClick={onClickRemove}> Удалить товар</button>
            </div>
        </article>
    );
};

export default CartItem;
