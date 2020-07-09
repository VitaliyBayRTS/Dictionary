import { deleteWord, wordInfoType, updateWord} from './../api/dal';
import { InferActionsTypes } from './reduxStore';
import { ThunkAction } from 'redux-thunk';
import { completWordDataType } from './allWordsReducer';

type ActionType = InferActionsTypes<typeof wordAction>

export const wordAction = {
    setWord: (word: completWordDataType) => ({type: 'SET_WORD', word} as const)
}


type ThunkType = ThunkAction<Promise<void>, wordStateType, unknown, ActionType>


export const setWordThunk = (word: completWordDataType): ThunkType => async (dispatch) => {
    dispatch(wordAction.setWord(word))
}

export const deleteWordThunk = (id: String): ThunkType => async (dispatch) => {
    const data = await deleteWord(id);
}

export const updateWordThunk = (id: String, wordInfo: wordInfoType): ThunkType => async (dispatch) => {
    const data = await updateWord(id, wordInfo)
}

let initialState = {
    wordData: {} as completWordDataType
}

type wordStateType = typeof initialState

let wordReducer = (state = initialState, action: ActionType): wordStateType => {
    switch(action.type) {
        case 'SET_WORD':
            return {...state, wordData: action.word}
        default:
            return state
    }
}

export default wordReducer;