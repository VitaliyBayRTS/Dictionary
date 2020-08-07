import React, { FunctionComponent, useState, useRef } from "react";
import s from './AddWord.module.scss';
import cn from 'classnames';
import { wordInfoType } from "../../api/dal";
import { addWordThunk } from "../../redux/addWordReducer";
interface AddWordProps {
    addWordThunk: (wordInfo: wordInfoType) => void,
    isWordSaved: boolean
}

let AddWord: FunctionComponent<AddWordProps> = (props) => {

    let [isWordSet, changeIsWordSet] = useState(false)
    let [isMeaningSet, changeIsMeaningSet] = useState(false)
    let [isAllCorrect, changeIsAllCorrect] = useState(false)
    let [word, setWord] = useState<string>('')
    let [meaning, setMeaning] = useState<string>('')
    let value = word + " - " + meaning

    let wordRef = React.createRef<HTMLInputElement>()
    let meaningRef = React.createRef<HTMLTextAreaElement>()

    const wordHandleClick = () => {
        if(wordRef.current?.value !== undefined) {
            setWord(wordRef.current?.value)
        }
        changeIsWordSet(true)
    }

    const meaningHandleClick = () => {
        if(meaningRef.current?.value !== undefined) {
            setMeaning(meaningRef.current?.value)
        }
        changeIsMeaningSet(true)
    }

    const addWord = () => {
        let wordInfo = {word, meaning}
        props.addWordThunk(wordInfo)
        changeIsAllCorrect(true)
    }

    return (<section>
        <div className={s.addWordBox}>
            <div className={cn(s.wordBox, {
                [s.displayNone]: isWordSet
            })}>
                <input type="text" ref={wordRef}/>
                <button onClick={wordHandleClick}>Siguiente</button> 
            </div>

            <div className={cn(s.meaningBox, {
                [s.displayNone]: !isWordSet || isMeaningSet
            })}>
                <textarea cols={30} rows={10} ref={meaningRef}></textarea>
                <button onClick={() => changeIsWordSet(false)}>Volver</button>
                <button onClick={meaningHandleClick}>Guardar</button>
            </div>

            <div className={cn(s.wordMeaningBox, {
                [s.displayNone]: !isWordSet || !isMeaningSet || isAllCorrect
            })}>
                <textarea cols={30} rows={10} value={value} onChange={() => {}}></textarea>
                <button onClick={() => changeIsMeaningSet(false)}>Volver</button>
                <button onClick={addWord}>Terminar </button>
            </div> 

            <div className={cn(s.savedSection, {
                [s.displayNone]: !isWordSet || !isMeaningSet || !isAllCorrect
            })}>
                <span>{props.isWordSaved ? "Guardado" : "Guardando"}</span>
            </div>
        </div>
    </section>)
}

export default AddWord;