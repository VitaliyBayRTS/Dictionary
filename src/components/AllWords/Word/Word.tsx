import React, { FunctionComponent } from "react";
import s from './Word.module.scss';
import { NavLink } from "react-router-dom";
import { completWordDataType } from "../../../redux/allWordsReducer";

interface AllWordsProps {
   wordData: completWordDataType,
   index: number,
   setWordThunk: (word: completWordDataType) => void
}

let Word: FunctionComponent<AllWordsProps> = (props) => {

    let submitData = () => {
        props.setWordThunk(props.wordData)
    }

    return (<NavLink to='/wordSettings' onClick={() => submitData()} className={s.wordBox}>
        <p> {props.index}. {props.wordData.word} - &nbsp;</p>
        <p>{props.wordData.shortMeaning}</p>
    </NavLink>)
}

export default Word;