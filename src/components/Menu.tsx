import React from 'react';

interface MenuProps {
    activeMenu: number;
    setActiveMenu: (index: number) => void;
}

const Menu: React.FC<MenuProps> = ({ activeMenu, setActiveMenu }) => {
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
