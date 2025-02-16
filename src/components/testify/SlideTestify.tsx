import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/style/globalStyle.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export const SlideTestify = () => {
    return (
        // Agregamos h-screen para ocupar toda la altura de la pantalla
        <div className='w-full h-screen'>
            <Swiper
                spaceBetween={0} // Reducimos el espacio entre slides a 0
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper h-full w-full" // Aseguramos que Swiper ocupe todo el espacio
            >
                {/* Aplicamos clases a cada SwiperSlide para controlar las dimensiones */}
                <SwiperSlide className="w-full h-full">
                    <img 
                        src="/public/img/cubeSlide/cube1.jpeg"
                        className="w-full h-full object-cover" // object-cover para mantener la proporción
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <img 
                        src="/public/img/cubeSlide/cube2.jpeg"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <img 
                        src="/public/img/cubeSlide/cube3.jpeg"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <img 
                        src="/public/img/cubeSlide/cube4.jpeg"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SlideTestify;