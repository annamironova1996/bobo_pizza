import React from 'react';

const Card = ({ title, description, sizes, img, dough, price }) => {
    console.log(dough);
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
                        return <button key={index}>{item}</button>;
                    })}
                </div>
                <div className="card__sizes">
                    {sizes?.map((size, index) => {
                        return <button key={index}>{size}</button>;
                    })}
                </div>
            </div>

            <div className="card__row">
                <span>от {price}₽</span>
                <button>Добавить</button>
            </div>
        </article>
    );
};

export default Card;
