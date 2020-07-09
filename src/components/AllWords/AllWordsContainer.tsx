import React from "react";
// import s from './AllWords.module.scss';
import { connect } from "react-redux";
import AllWords from "./AllWords";
import { getWordsThunk, setCurrentPageThunk } from '../../redux/allWordsReducer';
import { wordDataType } from '../../redux/allWordsReducer';
import { stateType } from '../../redux/reduxStore';


type mapStateToPropsType = {
    wordData: Array<wordDataType>,
    currentPage: number,
    totalWordsCount: number,
    pageWordsCount: number
}

type mapDispatchToPropsType = {
    getWordsThunk: (page: number) => void,
    setCurrentPageThunk: (page: number) => void
}
type MyProps = mapStateToPropsType & mapDispatchToPropsType

class AllWordsContainer extends React.Component<MyProps> {

    componentDidMount() {
        this.props.getWordsThunk(this.props.currentPage);
    }

    maxPageNumber() {
        const result = Math.ceil(this.props.totalWordsCount / this.props.pageWordsCount)
        return result
    }

    render() {
        // if(this.props.totalWordsCount == 0) {
        //     return <div>Loading...</div>
        // }
        return <AllWords wordData={this.props.wordData} 
                    getWordsThunk={this.props.getWordsThunk}
                    currentPage={this.props.currentPage}
                    maxPageNumber={this.maxPageNumber()}
                    setCurrentPageThunk={this.props.setCurrentPageThunk} />
    }
}


let mapStateToProps = (state: stateType) => {
    return {
        wordData: state.allWord.wordData,
        currentPage: state.allWord.currentPage,
        totalWordsCount: state.allWord.totalWordsCount,
        pageWordsCount: state.allWord.pageWordCount
    }
}

let AllWordContainer = connect(mapStateToProps, {getWordsThunk, setCurrentPageThunk})(AllWordsContainer);
export default AllWordContainer;