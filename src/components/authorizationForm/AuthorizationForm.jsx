import React from "react";
import css from './AuthorizationForm.module.css'
import cl from '../../assets/styles/FormClose.module.css'

const AuthorizationForm = () => {
    return (
        <div className={css.container}>
        <div className={css.loginCard}>
        <div className={cl.cl}></div>
        <h2 >Login</h2>
        <h3>Please enter your email and password!</h3>

        <form className={css.loginForm}>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="password"/>
            <section className={css.section}/>
            <br/>
            <button type="submit">Login</button>
        </form>
        </div>
        </div>
    )
}

export default AuthorizationForm;