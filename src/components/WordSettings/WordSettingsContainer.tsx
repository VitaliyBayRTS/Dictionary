import React from "react";
import { connect } from "react-redux";
import { stateType } from "../../redux/reduxStore";
import WordSettings from "./WordSettings";
import { completWordDataType } from "../../redux/allWordsReducer";
import { deleteWordThunk, updateWordThunk } from '../../redux/wordReducer';
import { wordInfoType } from "../../api/dal";


type mapStateToPropsType = {
    wordData: completWordDataType
}

type mapDispatchToPropsType = {
    deleteWordThunk: (id: String) => void,
    updateWordThunk: (id: String, wordInfo: wordInfoType) => void
}

type ownProps = {
}
type MyProps = mapStateToPropsType & mapDispatchToPropsType & ownProps

class WordSettingsContainer extends React.Component<MyProps> {

    componentDidMount() {
    }
    render() {
        return <WordSettings wordData={this.props.wordData} 
                        deleteWordThunk={this.props.deleteWordThunk}
                        updateWordThunk={this.props.updateWordThunk}
                        />
    }
}


let mapStateToProps = (state: stateType) => {
    return {
        wordData: state.wordSettings.wordData
    }
}


export default connect(mapStateToProps, {deleteWordThunk, updateWordThunk})(WordSettingsContainer);