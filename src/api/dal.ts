import { wordDataType } from './../redux/allWordsReducer';
import Axios from 'axios';

let instance = Axios.create({
    withCredentials: true,
    baseURL: "https://serene-wave-29540.herokuapp.com/dictionary/"
})

export type getWordsType = {
    totalCount: number,
    items: Array<wordDataType>,
    error: number
}

export let getWords = (page: number, count: number) => {
    return instance.get<getWordsType>(`allwords?page=${page}&count=${count}`).then(response => {
        return response.data
    })
}

export let getSearchWord = (page: number, count: number, word: string) => {
    return instance.get<getWordsType>(`search?page=${page}&count=${count}&word=${word}`).then(response => {
        return response.data
    })
}

export type deleteWordType = {
    result: string,
    deletedCount: number
}

export let deleteWord = (id: String) => {
    return instance.delete<deleteWordType>(`${id}`).then(response => {
        return response.data
    })
}

export type wordInfoType = {
    word: string,
    meaning: string
}

export let updateWord = (id: String, wordInfo: wordInfoType) => {
    return instance.put(`updateWord/${id}`, {wordInfo: wordInfo}).then(response => {
        return response
    }).catch(err => {
    })
}

export const addWord = (wordInfo: wordInfoType) => {
    return instance.post('', {wordInfo: wordInfo}).then(response => {
        return response.data
    }).catch(err => {
    })
}