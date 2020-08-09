import React, { FunctionComponent } from "react";
import s from './AllWords.module.scss';
import { completWordDataType } from "../../redux/allWordsReducer";
import Paginator from "../Paginator/Paginator";
import WordConnectedContainer from "./Word/WordContainer";
import Preloader from "../Preloader/Preloader";

interface AllWordsProps {
    wordData?: any,
    getWordsThunk: (page: number) => void,
    currentPage: number,
    maxPageNumber: number,
    setCurrentPageThunk: (page: number) => void
}

let AllWords: FunctionComponent<AllWordsProps> = (props) => {
    
    let globalIndex = (props.currentPage - 1) * 10
    let words = props.wordData.map( (w: completWordDataType, index: number) => 
        <WordConnectedContainer key={w._id} wordData={w}
              index={ props.currentPage !== 1 ? globalIndex +  (index + 1) : (index + 1)}/>)
            
    return (<div className={s.allWordsBox}>
        {words}
        <Paginator currentPage={props.currentPage} 
                    maxPageNumber={props.maxPageNumber} 
                    getWordsThunk={props.getWordsThunk}
                    setCurrentPageThunk={props.setCurrentPageThunk}/>
    </div>)
}

export default AllWords;