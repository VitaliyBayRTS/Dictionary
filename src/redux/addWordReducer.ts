import { addWord } from './../api/dal';
import { wordInfoType} from '../api/dal';
import { InferActionsTypes } from './reduxStore';
import { ThunkAction } from 'redux-thunk';

type ActionType = InferActionsTypes<typeof addWordAction>

export const addWordAction = {
    successfulAddedWord: (value: boolean) => ({type: 'addWordReducer/ADD_WORD', value} as const)
}


type ThunkType = ThunkAction<Promise<void>, addWordStateType, unknown, ActionType>


export const addWordThunk = (wordInfo: wordInfoType): ThunkType => async (dispatch) => {
    let data = await addWord(wordInfo)
    if(data.statusCode === 0) {
        dispatch(addWordAction.successfulAddedWord(true))
    }
}

let initialState = {
    successfullyAdded: false
}

type addWordStateType = typeof initialState

let addWordReducer = (state = initialState, action: ActionType): addWordStateType => {
    switch(action.type) {
        case 'addWordReducer/ADD_WORD':
            return {...state, successfullyAdded: action.value}
        default:
            return state
    }
}

export default addWordReducer;