import React, { Component } from 'react'
import { createPortal } from 'react-dom'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Consumer } from './context/Context'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default class Swipe extends Component {

    render() {
        return createPortal(
            <Consumer>
                    {value => (
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            loop
                            breakpoints={{
                                200: {
                                slidesPerView: 1,
                                },
                                967: {
                                slidesPerView: 3,
                                },
                            }}
                        >
                        {value.videoItem[value.videoIdx].item.map((item, idx) => 
                            <SwiperSlide key={idx}>
                                <div className="product__img">
                                    <div style={{                            
                                        backgroundImage: `url(${item.image})`
                                    }}>
                                    </div>
                                </div>
                                <p className="product__info">{item.info}</p>
                                <a className="product__link" href={item.link} rel="noreferrer" target="_blank">了解更多</a>
                            </SwiperSlide>
                        )}
                </Swiper>
                )}
            </Consumer>,
            document.getElementById("swiper")
        )
    }
}
