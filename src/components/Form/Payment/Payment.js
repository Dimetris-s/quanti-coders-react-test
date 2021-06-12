import React from "react";
import  './Payment.scss'
import Input from '../../UI/Input/Input' 

import privatImg from '../../../assets/img/privat.png'
import paypalImg from '../../../assets/img/paypal.png'
import visaImg from '../../../assets/img/visa.png'
import wmImg from '../../../assets/img/webmoney.png'
import terminalImg from '../../../assets/img/terminal.png'

const Payment = () => {
    return (
        <div className="payment">
            <div className="payment__left">
                <h4 className="payment__title">Спосiб оплати</h4>
                <div className="payment__options">
                    <div className="payment-option">
                        <div className="payment-option__logo">
                            <img src={visaImg} alt="logo" />
                        </div>
                        <div className="payment-option__info">Карта Visa/Master Card</div>
                    </div>
                    <div className="payment-option active">
                        <div className="payment-option__logo">
                            <img src={privatImg} alt="logo" />
                        </div>
                        <div className="payment-option__info">Приват24</div>
                    </div>
                    <div className="payment-option">
                        <div className="payment-option__logo">
                            <img src={terminalImg} alt="logo" />
                        </div>
                        <div className="payment-option__info">Термiнали Украини</div>
                    </div>
                    <div className="payment-option">
                        <div className="payment-option__logo">
                            <img src={wmImg} alt="logo" />
                        </div>
                        <div className="payment-option__info">WebMoney</div>
                    </div>
                    <div className="payment-option">
                        <div className="payment-option__logo">
                            <img src={paypalImg} alt="logo" />
                        </div>
                        <div className="payment-option__info">PayPal</div>
                    </div>
                </div>
            </div>
            <div className="payment__right">
                <h4 className="payment__title">Введiть наступнi даннi</h4>
                <div className="payment__card card">
                    <div className="card__number">
                        <div className="card__info">Номер карти</div>
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </div>
                    <div className="card__date">
                        <div className="card__info">Термін дії</div>
                        <Input />
                    </div>
                    <div className="card__cvv">
                        <div className="card__info">CVC/CVV</div>
                        <Input />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment