import { useEffect, useState } from 'react';
import axios from 'axios';

import Menu from '../components/Menu';
import Card from '../components/Card';
import Banners from '../components/Banners';
import Sort from '../components/Sort';

const Home = () => {
    const [pizza, setPizza] = useState([]);
    const [banners, setBanners] = useState([]);
    const [activeMenu, setActiveMenu] = useState(0);
    const [activePopupItem, setActivePopupItem] = useState({
        name: 'популярности',
        sort: 'rating',
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const pizzaAll = await axios.get(
                    'http://localhost:3005/pizza?category=' + activeMenu
                );
                const bannersAll = await axios.get(
                    'http://localhost:3005/banners'
                );

                setPizza(pizzaAll.data);
                setBanners(bannersAll.data);
            } catch (error) {
                console.log('ошибка при запросе данных');
            }
        }
        fetchData();
    }, [activeMenu]);
    console.log(banners);
    return (
        <main>
            <section className="banner">
                <div className="container">
                    <article className="banner__wrapper">
                        {banners?.map((banner, index) => {
                            return (
                                <Banners
                                    key={index}
                                    {...banner}
                                />
                            );
                        })}
                    </article>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="menu-wrapper">
                        <Menu
                            activeMenu={activeMenu}
                            setActiveMenu={setActiveMenu}
                        />
                        <Sort
                            activePopupItem={activePopupItem}
                            setActivePopupItem={(id) => setActivePopupItem(id)}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="card-wrapper">
                        {pizza.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    {...item}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
