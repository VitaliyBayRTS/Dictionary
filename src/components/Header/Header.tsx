import React, { FunctionComponent } from "react";
import s from './Header.module.scss';
import logo from '../../common/img/logo.png';
interface HeaderProps {

}

let Header: FunctionComponent<HeaderProps> = (props) => {
    return (<header>
        <div className={s.headerContianer}>
            <span>Yuriy Bay</span>
            <img src={logo} alt=""/>
        </div>
    </header>)
}

export default Header;
