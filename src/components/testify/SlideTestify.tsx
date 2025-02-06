import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import '@/style/globalStyle.css';


import { EffectCube, Pagination } from 'swiper/modules';


export const SlideTestify = () => {
    return (
        <div className=' flex items-center'>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: false,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="swiper"
                >
                <SwiperSlide>
                    <img src="/public/img/cubeSlide/cube1.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/img/cubeSlide/cube2.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/public/img/cubeSlide/cube3.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/public/img/cubeSlide/cube4.jpeg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SlideTestify;