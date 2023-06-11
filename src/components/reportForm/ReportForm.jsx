import React from "react";
import css from './ReportForm.module.css'
import cl from '../../assets/styles/FormClose.module.css'

const ReportForm = () => {
    return (
        <div className={css.container}>
        <div className={css.loginCard}>
        <div className={cl.cl}></div>
        <h2 >Report theft</h2>
        <h3>Please provide information!</h3>

        <form className={css.loginForm}>
            <input type="" placeholder="license number"/>
            <input type="" placeholder="full name"/>
            <input type="" placeholder="bike type"/>
            <input type="" placeholder="color"/>
            <input type="" placeholder="date of theft"/>
            <input type="" placeholder="additional Information"/>
            <input type="" placeholder="!!!ОДОБРЕННЫЙ СОТРУДНИК (Доступ для сотрудников)!!!"/>
            <section className={css.section}/>
            <br/>
            <button type="submit">Send report</button>
        </form>
        </div>
        </div>
    )
}

export default ReportForm;
