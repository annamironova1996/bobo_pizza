import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import {
    setActiveMenu,
    setCurrentPage,
    setFilters,
    selectFilterSlice,
} from '../redux/slices/filterSlice';

import { fetchPizzas, selectPizzaSliceItems } from '../redux/slices/pizzaSlice';
import Menu from '../components/Menu';
import Card from '../components/Card';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const { activeMenu, currentPage } = useSelector(selectFilterSlice);

    const pizza = useSelector(selectPizzaSliceItems);
    // const [banners, setBanners] = useState([]);

    const onClickMenu = (id) => {
        dispatch(setActiveMenu(id));
    };

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    };
    //если был первый рендер, то проверяем URL-параметры и сохраняем в редкусе
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            //const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty)

            dispatch(
                setFilters({
                    ...params,
                    //sort
                })
            );
            isSearch.current = true;
        }
    }, []);
    //если был первый рендер, то запрашиваем пиццы
    useEffect(() => {
        if (!isSearch.current) {
            dispatch(fetchPizzas({ currentPage }));
        }
        isSearch.current = false;
    }, [currentPage]);
    // если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                currentPage,
                //activeMenu,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [activeMenu, currentPage]);
    return (
        <main>
            <section className="banner">
                <div className="container">
                    {/*  <article className="banner__wrapper">
                        {banners?.map((banner, index) => {
                            return (
                                <img
                                    src={banner.img}
                                    key={index}
                                    alt="Баннер"
                                />
                            );
                        })}
                    </article> */}
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="menu-wrapper">
                        <Menu
                            activeMenu={activeMenu}
                            setActiveMenu={onClickMenu}
                        />
                        <Sort />
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
                    <Pagination
                        currentPage={currentPage}
                        onChangePage={onChangePage}
                    />
                </div>
            </section>
        </main>
    );
};

export default Home;
