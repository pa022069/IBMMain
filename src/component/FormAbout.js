import React, { useContext } from 'react';
import context from './context/Context';

import TypeOl from './about/Ol';
import TypeUl from './about/Ul';
import Multi from './about/Multi';

const FormAbout = () => {
    const contextValue = useContext(context);
    const { Brand, CTAIdx } = contextValue;

    return (
        <div className="form__about">
            <div className="about__info">
                <h2 className="title">填表取得助攻方案</h2>
                <p className="text"><span>{Brand[CTAIdx - 1].name}</span>免費深度學習，專屬顧問諮詢服務</p>
            </div>
            <div className="about__content">
                <p dangerouslySetInnerHTML={{ __html: Brand[CTAIdx - 1].text }}></p>
                {Brand[CTAIdx - 1].list.type === 'ol' && <TypeOl {...Brand[CTAIdx - 1].list}/>}
                {Brand[CTAIdx - 1].list.type === 'ul' && <TypeUl {...Brand[CTAIdx - 1].list}/>}
                {Brand[CTAIdx - 1].list.type === 'multi' && <Multi {...Brand[CTAIdx - 1].list}/>}
            </div>
        </div>
    );
}

export default FormAbout;