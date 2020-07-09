import React, { FunctionComponent } from "react";
import s from './NavBar.module.scss';
import searchIcon from '../../common/img/search_icon.png';
import addIcon from '../../common/img/add_icon.png';
import allIcon from '../../common/img/all_icon.png';
import { NavLink } from "react-router-dom";
interface NavBarProps {

}

let NavBar: FunctionComponent<NavBarProps> = (props) => {
    return (<div className={s.navBar}>
        <div className={s.navBarContainer}>
            <NavLink to="/search" className={s.search + " " + s.navBarItem}>
                    <img src={searchIcon} alt=""/>
            </NavLink>
            <NavLink to="addword" className={s.add + " " + s.navBarItem}>
                <img src={addIcon} alt=""/>
            </NavLink>
            <NavLink to="/allwords" className={s.all + " " + s.navBarItem}>
                <img src={allIcon} alt=""/>
            </NavLink>
        </div>
    </div>)
}

export default NavBar;