import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/style/globalStyle.css';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const SlideTestify = () => {
    return (
        <div className=' relative'> 
            <Swiper
                spaceBetween={0}
                effect={'fade'}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="w-full h-full">
                    <img
                        src="/img/myClinic.jpg"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <img
                        src="/img/cubeSlide/cube2.jpeg"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <img
                        src="/img/cubeSlide/cube3.jpeg"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                
                <div className="swiper-button-prev-custom swiper-button-prev"></div>
                <div className="swiper-button-next-custom swiper-button-next"></div>
            </Swiper>
           
            <style>{`
                .swiper-button-prev-custom,
                .swiper-button-next-custom {
                    color: #5b5bc4;
                    width: 40px;
                    height: 40px;
                    margin-top: -20px;
                    position: absolute; /* Añadimos 'absolute' */
                    top: 50%; /* Centramos verticalmente */
                    z-index: 10; /* Aseguramos que estén por encima de las imágenes */
                }
                .swiper-button-prev-custom {
                    left: 10px; /* Ajustamos la posición izquierda */
                }
                .swiper-button-next-custom {
                    right: 10px; /* Ajustamos la posición derecha */
                }
                .swiper-button-prev-custom:after,
                .swiper-button-next-custom:after {
                    font-size: 50px;
                }
            `}</style>
        </div>
    );
};

export default SlideTestify;