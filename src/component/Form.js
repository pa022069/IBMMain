import React, { Component, Fragment } from 'react'
import FormAbout from './FormAbout';

import $ from 'jquery'

import { Consumer } from './context/Context'
class Form extends Component {
    state = {
        select: [
            {
                value: "0~500",
                text: "500以下"
            },
            {
                value: "501~1000",
                text: "501-1000 人"
            },
            {
                value: "1001",
                text: "1001 人以上"
            }
        ]
    }
    componentDidMount() {
        $(".form").fadeIn();
    }
    componentWillUnmount() {
        $(".form").fadeOut();
    }
    render() {
        const { select } = this.state;
        return (
                <Consumer>
                    {value => (
                        <Fragment>
                            <a className="form__close" onClick={() => {value.openForm('', 0)}}><span></span><span></span></a>
                            <div className="form__box">
                                {value.CTAIdx !== 0 && <FormAbout/>}
                                {/* <div className="form__about">
                                    <div className="about__info">
                                        <h2 className="title">填表取得助攻方案</h2>
                                        <p className="text"><span>{value.Brand[value.CTAIdx-1].name}</span>免費深度學習，專屬顧問諮詢服務</p>
                                    </div>
                                    <div className="about__content">
                                        <p dangerouslySetInnerHTML={{ __html: value.Brand[value.CTAIdx-1].text }}></p>
                                        <ol>
                                            <li>提供IBM AI運算環境平台快速部署與諮詢服務。</li>
                                            <li>提供IBM AI運算環境平台快速部署與諮詢服務。</li>
                                            <li>提供IBM AI運算環境平台快速部署與諮詢服務。</li>
                                            <li>提供IBM AI運算環境平台快速部署與諮詢服務。</li>
                                        </ol>
                                    </div>
                                </div> */}
                                <form>
                                    <div className="form__info">
                                        <h2 className="title">填寫表單</h2>
                                        <p className="text">{value.CTA[value.CTAIdx].text}</p>
                                    </div>
                                    <div className="form__group half">
                                        <input className="input" type="text" placeholder="姓⽒" value={value.Last_name} onChange={value.onLastName}/>
                                        <input className="input" type="text" placeholder="名字" value={value.First_name} onChange={value.onFirstName}/>
                                    </div>
                                    <div className="form__group">
                                        <input className="input" type="tel" placeholder="電話號碼" maxLength="12" value={value.Phone} onChange={value.onPhone}/>
                                    </div>
                                    <div className="form__group">
                                        <input className="input" type="text" placeholder="公司" value={value.Company} onChange={value.onCompany}/>
                                    </div>
                                    <div className="form__group">
                                        <input className="input" type="text" placeholder="部⾨" value={value.Department} onChange={value.onDept}/>
                                    </div>
                                    <div className="form__group">
                                        <input className="input" type="text" placeholder="職稱" value={value.Job_title} onChange={value.onJob}/>
                                    </div>
                                    <div className="form__group">
                                        <input className="input" type="email" placeholder="電⼦信箱" value={value.Email} onChange={value.onEmail}/>
                                    </div>
                                    <div className="form__group">
                                        <select name="group" className="select" id="group" value={value.Company_size} onChange={value.onScale}>
                                            <option value="0" disabled>公司規模</option>
                                            {select.map(item => 
                                                <option key={item.text} value={item.value}>{item.text}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="form__group check">
                                        <h3>IBM 得以使⽤我的聯絡⼈資料，以讓我得知產品、服務及供應⽅案的最新資訊</h3>
                                        <div className="box">
                                            <div>
                                                <input type="checkbox" id="email" name="email" value="email" onChange={value.ChangeEmail} checked={value.Email_verification}/>
                                                <label htmlFor="email">透過電⼦郵件</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="phone" name="phone" value="phone" onChange={value.ChangePhone} checked={value.Phone_verification}/>
                                                <label htmlFor="phone">透過電話</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form__group">
                                        <p>您可以隨時透過傳送電⼦郵件⾄ netsupp@us.ibm.com 來取消接收最新訊息。您也可以透過按⼀下每封此類電⼦郵件中的取消訂閱鏈結來取消訂閱接收⾏銷電⼦郵件。有關我們的處理作業詳細資訊可以在 IBM
                                                隱私權聲明。提交此表單時，即表⽰我確認我已閱讀並瞭解 IBM 隱私權聲明。</p>
                                    </div>
                                    <div className="form__group">
                                        <a className="submit" onClick={value.valid}>{value.CTA[value.CTAIdx].id != 0 ? "送出表單":"填寫完畢"}</a>
                                    </div>
                                </form>
                            </div>
                        </Fragment>
                    )}
                </Consumer>
        )
    }
}

export default Form;