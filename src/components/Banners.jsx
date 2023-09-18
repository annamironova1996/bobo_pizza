import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from 'swiper';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

export default function SimpleSwiper({ img, index }) {
    return (
        <Swiper
            className="swiper-wrapper"
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            virtual
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide
                key={index}
                virtualIndex={index}
            >
                <img
                    src={img}
                    alt="баннер"
                />
            </SwiperSlide>
        </Swiper>
    );
}

/* import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default ({ img, index }) => {
    // Create array with 1000 slides

    return (
        <Swiper
            modules={[Virtual]}
            spaceBetween={50}
            slidesPerView={3}
            virtual
        >
            <SwiperSlide
                key={index}
                virtualIndex={index}
            >
                <img src={img} />
            </SwiperSlide>
        </Swiper>
    );
};
 */
