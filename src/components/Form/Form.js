import React, { useState } from "react";
import  './Form.scss'

import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

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

    const changeInputHandler = (value, controlName) => {
        const formControlscopy = {...formControls}
        const control = {...formControlscopy[controlName]}

        control.value = value
        formControlscopy[controlName] = control

        setFormControls(formControlscopy)
        
    }

    return (
        <form className="form">
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
                <div className="form__help-options help-options">
                    <div className="help-options__item">Зробити</div>
                    <div className="help-options__item">Фiнансова допомога</div>
                    <div className="help-options__item">Матерiальна допомога</div>
                    <div className="help-options__item">Волонтерство</div>
                </div>
                <div className="payment">

                </div>
                <Button appearance="gradient" size="lg" text="Допомогти" type="submit"/>

            </footer>
        </form>
    )
}

export default Form