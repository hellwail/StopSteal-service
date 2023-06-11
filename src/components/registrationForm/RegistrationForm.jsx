import React from "react";
import css from './RegistrationForm.module.css'
import cl from '../../assets/styles/FormClose.module.css'

const RegistrationForm = () => {
    return (
        <div className={css.container}>
        <div className={css.registerCard}>
        <div className={cl.cl}></div>
        <h2 >Register</h2>
        <form className={css.registerForm}>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="password"/>
            <input type="name" placeholder="name"/>
            <input type="surname" placeholder="surname"/>
            <section className={css.section}/>
            <br/>
            <button type="submit">Register</button>
        </form>
        </div>
        </div>
    )
}

export default RegistrationForm;