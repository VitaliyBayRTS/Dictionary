import React, { FunctionComponent } from "react";
import s from './Search.module.scss';
import Search from "./Search";
import { connect } from "react-redux";
import { stateType } from "../../redux/reduxStore";
import { getSearchedWordsThunk, setCurrentPageThunk, cleaningUpData } from '../../redux/searchReducer';
import { completWordDataType } from "../../redux/allWordsReducer";

interface SearchProps {
    getSearchedWordsThunk: (page: number, word: string) => void,
    searchedWords: Array<completWordDataType>,
    currentPage: number,
    totalWordsCount: number,
    pageWordsCount: number,
    setCurrentPageThunk: (page: number) => void,
    cleaningUpData: () => void
}

class SearchContainer extends React.Component<SearchProps> {

    componentWillUnmount() {
        this.props.cleaningUpData()
    }

    maxPageNumber() {
        const result = Math.ceil(this.props.totalWordsCount / this.props.pageWordsCount)
        return result
    }

    render() {
        return <Search getSearchedWordsThunk={this.props.getSearchedWordsThunk}
                searchedWords={this.props.searchedWords} 
                currentPage={this.props.currentPage}
                maxPageNumber={this.maxPageNumber()}
                setCurrentPageThunk={this.props.setCurrentPageThunk}/>
    }
}

const mapStateToProps = (state: stateType) => {
    return {
        searchedWords: state.search.wordData,
        currentPage: state.search.currentPage,
        totalWordsCount: state.search.totalWordsCount,
        pageWordsCount: state.search.pageWordCount
    }
}

export default connect(mapStateToProps, {getSearchedWordsThunk, setCurrentPageThunk, cleaningUpData})(SearchContainer);