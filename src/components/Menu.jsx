import React from 'react';

const Menu = ({ activeMenu, setActiveMenu }) => {
    const menu = ['Все', 'Мясные', 'Сырные', 'Овощная', 'Комбо', 'Микс'];
    return (
        <section className="menu">
            <div className="container">
                <ul className="menu__row">
                    {menu.map((item, index) => {
                        return (
                            <li
                                className={activeMenu === index ? 'active' : ''}
                                onClick={() => setActiveMenu(index)}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Menu;
