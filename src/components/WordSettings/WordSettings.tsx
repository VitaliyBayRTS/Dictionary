import React, { FunctionComponent, useState } from "react";
import s from './WordSettings.module.scss';
import { completWordDataType } from "../../redux/allWordsReducer";
import cn from 'classnames';
import { wordInfoType } from "../../api/dal";
import { NavLink, Redirect } from "react-router-dom";
interface ContainerProps {
    wordData: completWordDataType,
    deleteWordThunk: (id: String) => void,
    updateWordThunk: (id: String, wordInfo: wordInfoType ) => void
}

let WordSettings: FunctionComponent<ContainerProps> = (props) => {

    let [yesNoValue, setYesNoValue] = useState(false)
    let [finalSectionValue, setfinalSectionValue] = useState(false)
    let [editMode, setEditMode] = useState(false)
    let [textValue, setTextValue] = useState(props.wordData.word + " - " + props.wordData.meaning)
    let [wordCopy, setWordCopy] = useState(props.wordData.word)
    let [meaningCopy, setMeaningCopy] = useState(props.wordData.meaning)

    const handleChange = (even: any) => {
        let text = even.target.value
        let scriptPosition = text.indexOf('-')
        let word = text.substring(0, scriptPosition - 1)
        let meaning = text.substring(scriptPosition + 2)
        if(word !== wordCopy || meaning !== meaningCopy) {
            let wordInfo = {word, meaning}
            props.updateWordThunk(props.wordData._id, wordInfo)
            setWordCopy(word)
            setMeaningCopy(meaning)
        }
    }
    // debugger
    if(Object.keys(props.wordData).length === 0) {
        return <Redirect to="/search" />
    }

    return (
        <div className={s.wordSettingsBox}>
            <section className={cn(s.mainSection, {
                [s.displayNone]: yesNoValue})}>

                {!editMode ? <div className={s.word} onDoubleClick={() => setEditMode(true)}>
                    <p>{wordCopy} - &nbsp;</p>
                    <p>{meaningCopy}</p>
                </div> : <div>
                    <textarea autoFocus value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    onBlur={(e) => {setEditMode(false); handleChange(e)}}/>
                </div>}
                <div className={s.buttonSection}>
                    <button onClick={() => setYesNoValue(true)}>Eliminar</button>
                    <button>Actualizar</button>
                    <NavLink to="/search">Volver</NavLink>
                </div>
            </section>

            <section className={cn(s.yesNoSection, {
                [s.displayNone]: !yesNoValue || finalSectionValue,
                [s.displayIB]: yesNoValue
            })} >
                <button onClick={() => {
                    props.deleteWordThunk(props.wordData._id)
                    setfinalSectionValue(true)
                }}>Si</button>
                <button onClick={() => setYesNoValue(false)}>No</button>           
            </section>

            <section className={cn(s.finalSection, {
                [s.displayNone]: !finalSectionValue
            })}>
                <span>Eliminado</span>
            </section>
        </div>)
}

export default WordSettings;