import React, { FunctionComponent } from "react";
import s from './Dictionary.module.scss';
import dicBg from '../../common/img/dic_bg.png';
import { NavLink } from "react-router-dom";
interface DictionaryProps {

}

let Dictionary: FunctionComponent<DictionaryProps> = (props) => {
    return (<div className={s.dictionary} >
        <NavLink to="/search" className={s.link}>
            <div className={s.bgImg} style={{ backgroundImage: `url(${dicBg})`}}></div>
        </NavLink>
    </div>)
}

export default Dictionary;