import React from "react";
import css from './Header.module.css'
import classNames from 'classnames'

const Header = () => {
    return(
        <header className= {css.header}>
            <div className={css.btnContainer}>
                <button className={classNames(css.first, css.button)}>button 1</button>                
                <button className={classNames(css.second, css.button)}>button 2</button>
            </div>
        </header>
    )
}

export default Header;