import { getWords, getWordsType } from './../api/dal';
import { InferActionsTypes } from './reduxStore';
import { ThunkAction } from 'redux-thunk';
// const SET_STATUS: string = 'SET_STATUS';

// export const addPostActionCreator = (postBody: string) => ({ type: ADD_POST, postBody });

type ActionType = InferActionsTypes<typeof allWordsAction>

export const allWordsAction = {
    setWords: (words: Array<wordDataType>) => ({type: 'SET_WORDS', words} as const),
    setWordsCount: (count: number) => ({type: 'SET_WORDS_COUNT', count} as const),
    setCurrentPage: (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const)
}


type ThunkType = ThunkAction<Promise<void>, wordsStateType, unknown, ActionType>


export const getWordsThunk = (page: number): ThunkType => async (dispatch) => {
    const data: getWordsType = await getWords(page, initialState.pageWordCount);
    if (data.error === 0) {
        dispatch(allWordsAction.setWords(data.items))
        dispatch(allWordsAction.setWordsCount(data.totalCount))
    } 
}

export const setCurrentPageThunk = (page: number): ThunkType => async (dispatch) => {
    dispatch(allWordsAction.setCurrentPage(page))
}

export type wordDataType = {
    _id: String,
    word: String,
    meaning: String
}

export type completWordDataType = {
    _id: String,
    word: String,
    meaning: String,
    shortMeaning: String
}


let initialState = {
    wordData: [
    ] as Array<completWordDataType>,
    currentPage: 1,
    totalWordsCount: 1,
    pageWordCount: 10, //Count of words that we want represent on page
    maxMeaningLength: 100
}

type wordsStateType = typeof initialState

let allWordReducer = (state = initialState, action: ActionType): wordsStateType => {
    switch(action.type) {
        case 'SET_WORDS':
            let shortText = action.words.map((w) => {
                let short = w.meaning.length > initialState.maxMeaningLength ?  w.meaning.substring(0, initialState.maxMeaningLength) + "..." : w.meaning
                return {...w, shortMeaning: short}
            })
            return {...state, wordData: shortText}
        case 'SET_WORDS_COUNT':
            return {...state, totalWordsCount: action.count}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.page}
        default:
            return state
    }
}

export default allWordReducer;