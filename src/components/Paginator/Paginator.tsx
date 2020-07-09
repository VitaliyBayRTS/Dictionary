import React, { FunctionComponent, useState } from "react";
import s from './Paginator.module.scss';
import cn from "classnames";
import prevImg from '../../common/img/allWords/prev.png';
import nextImg from '../../common/img/allWords/next.png';

interface AllWordsProps {
    getWordsThunk: any,
    currentPage: number,
    maxPageNumber: number,
    setCurrentPageThunk: (page: number) => void
}

let Paginator: FunctionComponent<AllWordsProps> = (props) => {
    
    let getWords = (page: number) => {
        let nextPage = props.currentPage + page;
        props.getWordsThunk(nextPage);
        props.setCurrentPageThunk(nextPage);
    }
    return (
        <div className={s.paginatorBox}>
            <div className={s.paginator}>
                <button onClick={() => {getWords(-1)}} disabled={props.currentPage <= 1}>
                    <img src={prevImg} className={cn({[s.opacity]: props.currentPage <= 1})} alt="prev" />
                </button>
                <span>pg.{props.currentPage}</span>
                <button onClick={() => {getWords(1)}} disabled={props.currentPage >= props.maxPageNumber}>
                    <img src={nextImg} className={cn({[s.opacity]: props.currentPage >= props.maxPageNumber})} alt="next"/>
                </button>
            </div>
        </div>)
}

export default Paginator;