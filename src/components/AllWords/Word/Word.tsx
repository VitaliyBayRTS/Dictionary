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
        <p>{props.index}. <b>{props.wordData.word.toLowerCase().charAt(0).toUpperCase() + 
            props.wordData.word.slice(1)} -</b> &nbsp;
            <span>{props.wordData.shortMeaning}</span>
        </p>
        
    </NavLink>)
}

export default Word;