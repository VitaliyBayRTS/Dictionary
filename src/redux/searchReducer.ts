import { getSearchWord } from './../api/dal';
import { wordDataType, completWordDataType } from './allWordsReducer';
import { getWordsType } from '../api/dal';
import { InferActionsTypes } from './reduxStore';
import { ThunkAction } from 'redux-thunk';

type ActionType = InferActionsTypes<typeof searchAction>

export const searchAction = {
    setWords: (words: Array<wordDataType>) => ({type: 'SearchReducer/SET_SEARCHED_WORDS', words} as const),
    setWordsCount: (count: number) => ({type: 'SearchReducer/SET_WORDS_COUNT', count} as const),
    setCurrentPage: (page: number) => ({type: 'SearchReducer/SET_CURRENT_PAGE', page} as const),
    cleaningUp: () => ({type: 'SearchReducer/CLEANING_UP'} as const)

}


type ThunkType = ThunkAction<Promise<void>, wordsStateType, unknown, ActionType>


export const getSearchedWordsThunk = (page: number, word: string): ThunkType => async (dispatch) => {
    const data: getWordsType = await getSearchWord(page, initialState.pageWordCount, word);
    if (data.error === 0) {
        dispatch(searchAction.setWords(data.items))
        dispatch(searchAction.setWordsCount(data.totalCount))
    } 
}

export const setCurrentPageThunk = (page: number): ThunkType => async (dispatch) => {
    dispatch(searchAction.setCurrentPage(page))
}

export const cleaningUpData = (): ThunkType => async (dispatch) => {
    dispatch(searchAction.cleaningUp())
}


let initialState = {
    wordData: [
    ] as Array<completWordDataType>,
    currentPage: 1,
    totalWordsCount: 1,
    pageWordCount: 5, //Count of words that we want represent on page
    maxMeaningLength: 55
}

type wordsStateType = typeof initialState

let searchReducer = (state = initialState, action: ActionType): wordsStateType => {
    switch(action.type) {
        case 'SearchReducer/SET_SEARCHED_WORDS':
            let shortText = action.words.map((w) => {
                let short = w.meaning.length > initialState.maxMeaningLength ?  w.meaning.substring(0, initialState.maxMeaningLength) + "..." : w.meaning
                return {...w, shortMeaning: short}
            })
            return {...state, wordData: shortText}
        case 'SearchReducer/SET_WORDS_COUNT':
            return {...state, totalWordsCount: action.count}
        case 'SearchReducer/SET_CURRENT_PAGE':
            return {...state, currentPage: action.page}
        case 'SearchReducer/CLEANING_UP':
            return {...state, wordData: [], currentPage: 1}
        default:
            return state
    }
}

export default searchReducer;