import React, { useState } from "react";
import  './Form.scss'

import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import Payment from "./Payment/Payment";
import HelpList from "./HelpList/HelpList";

import handImg from '../../assets/img/hand.png'
import heartImg from '../../assets/img/heart.png'
import clothesImg from '../../assets/img/clothes.png'
import pocketImg from '../../assets/img/pocket.png'

function createFormControl(type = 'text', label, value = '', placeholder = null) {
    return {
        type,
        label,
        value,
        placeholder
    }
}

function createFormControls() {
    return {
        firstname: createFormControl("text", "Iм'я"),
        lastname: createFormControl("text", "Прiзвище"),
        company: createFormControl("text", "Назва компанii, органiзацiї"),
        files: createFormControl("file", "+ Логотип"),
        email: createFormControl("email", "Email-адрес"),
        phone: createFormControl("tel", "Номер телефону"),
        country: createFormControl("text", "Країна"),
        city: createFormControl("text", "Мiсто"),
        region: createFormControl("text", "Штат, район"),
        address: createFormControl("text", "Адреса"),
        postIndex: createFormControl("text", "Поштовий iндекс")
    }    
}

const Form = props => {
    
    const [formControls, setFormControls] = useState(createFormControls())
    const [helpItems] = useState([
        {id: 1, img: handImg, text: "Зробити", active: false},
        {id: 2, img: pocketImg, text: "Фiнансова допомога", active: true},
        {id: 3, img: clothesImg, text: "Матерiальна допомога", active: false},
        {id: 4, img: heartImg, text: "Волонтерство", active: false},
    ])

    const submitHandler = event => {
        event.preventDefault()
    }

    const changeInputHandler = (value, controlName) => {
        const formControlscopy = {...formControls}
        const control = {...formControlscopy[controlName]}

        control.value = value
        formControlscopy[controlName] = control

        setFormControls(formControlscopy)
        
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <header className="form__header">
                <h2 className="form__title">Заповнiть форму</h2>
                <div className="form__switch">
                    <span className="form__variant active">Фiз. особа</span>
                    <span className="form__variant">Юр. особа</span>
                </div>
            </header>
            <div className="form__body">
                {
                    Object.keys(formControls).map((controlName, id) => {
                        const control = formControls[controlName]

                        return (
                            <Input
                                key={id} 
                                type={control.type}
                                size={control.size}
                                label={control.label}
                                name={controlName}
                                value={control.value}
                                onChange={event => changeInputHandler(event.target.value, controlName)}
                            />
                        )
                    })
                }
            </div>
            <footer className="form__footer">
                <h2 className="form__title">Види допомоги</h2>
                <h3 className="form__subtitle">Ви можете змiнити вид допомоги</h3>
                <HelpList helpItems={helpItems}/>
                <Payment />
                <Button className="form__button" appearance="gradient" size="lg" text="Допомогти" type="submit"/>
            </footer>
        </form>
    )
}

export default Form