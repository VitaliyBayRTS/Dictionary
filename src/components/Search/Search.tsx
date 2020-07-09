import React, { FunctionComponent, useState } from "react";
import s from './Search.module.scss';
import { completWordDataType } from "../../redux/allWordsReducer";
import Paginator from "../Paginator/Paginator";
import WordConnectedContainer from "../AllWords/Word/WordContainer";
interface SearchProps {
    getSearchedWordsThunk: (page: number, word: string) => void,
    searchedWords: Array<completWordDataType>,
    currentPage: number,
    maxPageNumber: number,
    setCurrentPageThunk: (page: number) => void
}

let Search: FunctionComponent<SearchProps> = (props) => {

    let [searchedWord, setSearchedWord] = useState('')

    let serachWord = (page: number) => {
        props.getSearchedWordsThunk(page, searchedWord)
    }

    let words = props.searchedWords.map((w: completWordDataType, index: number) => <WordConnectedContainer key={w._id} wordData={w}
    index={(index + 1)}/>)

    return (<div className={s.searchBox}>
        <input onChange={(e) => {setSearchedWord(e.target.value); props.getSearchedWordsThunk(1, e.target.value)}} type="text"/>
        <div className={s.wordSection}>
            {words}
            <Paginator currentPage={props.currentPage} 
                        maxPageNumber={props.maxPageNumber}
                        getWordsThunk={serachWord}
                        setCurrentPageThunk={props.setCurrentPageThunk}/>
        </div>
    </div>)
}

export default Search;