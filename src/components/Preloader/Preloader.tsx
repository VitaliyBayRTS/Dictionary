import React, { FunctionComponent } from "react";
import s from './Preloader.module.scss';
import cn from "classnames";
import logo from '../../common/img/logo.png';

interface PreloaderProps {
}

let Preloader: FunctionComponent<PreloaderProps> = (props) => {
    return (
        <div className={s.preloaderBox}>
            <div className={s.imgBox}>
                <img src={logo} alt=""/>
            </div>
        </div>)
}

export default Preloader;