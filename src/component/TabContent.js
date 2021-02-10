import React, { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';

import context from './context/Context';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const TabContent = () => {
    const contextValue = useContext(context);
    const { Tab, openForm } = contextValue;
    return createPortal(
        <Fragment>
            <div className="tab__info">
                <div className="info__img">
                    <img src="images/tab-title.png" alt="" />
                </div>
                <div className="info__content">
                    <h2 className="info__title">IBM 技術助攻大聯盟</h2>
                    <p className="info__text">與各家代理商聯手合作全方位解決方案產品線，以實惠價格與不間斷數據供給<br />讓企業2021新世代運營不中斷！</p>
                </div>
            </div>
            <div className="tab__content">
                {Tab.map((item, idx) => 
                <div className="item" key={idx}>
                    <div className="item__title">{item.title} 
                    {/* / <span>{item.subtitle}</span> */}
                    </div>
                    <div className="item__content">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            // loop
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                },
                                967: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {item.items.map((obj,idx)=>
                                <SwiperSlide key={obj.id}>
                                    <div className="company">
                                        <div className="company__content">
                                            <div className="company__logo">
                                                <img src={obj.image} alt="" />
                                            </div>
                                            <div className="company__text">
                                                <p>{obj.text}</p>
                                            </div>
                                            <div className="company__btn">
                                                <a onClick={() => {openForm('C', obj.id)}}>{obj.cta}</a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
                )}
                {/* <div className="item">
                    <div className="item__title">助攻組合1：混合雲整合支援 /
              <span>搶先實機體驗地表最強主機LinuxONE整合應用打造新世代混合雲創新平台</span>
                    </div>
                    <div className="item__content">
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
                            <SwiperSlide>
                                <div className="company">
                                    <div className="company__content">
                                        <div className="company__logo">
                                            <img src="images/company/company6.png" alt="" />
                                        </div>
                                        <div className="company__text">
                                            <p>混合多雲儲存架構支援 專屬諮詢服務</p>
                                        </div>
                                        <div className="company__btn">
                                            <a href="javascript:void(0)">獲得神助攻！</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="company">
                                    <div className="company__content">
                                        <div className="company__logo">
                                            <img src="images/company/company8.png" alt="" />
                                        </div>
                                        <div className="company__text">
                                            <p>IBM LinuxONE 降本增效 客戶專屬效益評估服務
                    </p>
                                        </div>
                                        <div className="company__btn">
                                            <a href="javascript:void(0)">獲得神助攻！</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="company">
                                    <div className="company__content">
                                        <div className="company__logo">
                                            <img src="images/company/company7.png" alt="" />
                                        </div>
                                        <div className="company__text">
                                            <p>IBM Cloud Pak on LinuxONE 客戶專屬商業價值評估服務
                    </p>
                                        </div>
                                        <div className="company__btn">
                                            <a href="javascript:void(0)">獲得神助攻！</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div> */}
            </div>
        </Fragment>,
        document.getElementById("tab")
    );
}

export default TabContent;