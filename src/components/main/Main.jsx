import React from "react";
import css from './Main.module.css'


const Main = () => {
    return (
        <div className={css.main}>
            <div className={css.description}>
                <h1 className={css.title}>Title</h1>
                <p className={css.descriptionText}>вафвпавпывпаывпывап</p>
                <p className={css.descriptionText}>пывапывапывап</p>
                <p className={css.descriptionText}>ывараыврвыарывар</p>
            </div>
            <div className={css.block}>
            </div>
        </div>
    )
}

export default Main;