import React from "react";
import { connect } from "react-redux";
import Word from "./Word";
import { completWordDataType } from "../../../redux/allWordsReducer";
import { stateType } from "../../../redux/reduxStore";
import { setWordThunk } from '../../../redux/wordReducer';


type mapStateToPropsType = {
}

type mapDispatchToPropsType = {
    setWordThunk: (word: completWordDataType) => void
}

type ownProps = {
    wordData: completWordDataType,
    index: number
}
type MyProps = mapStateToPropsType & mapDispatchToPropsType & ownProps

class WordContainer extends React.Component<MyProps> {

    componentDidMount() {
    }
    render() {
        return <Word wordData={this.props.wordData} index={this.props.index} setWordThunk={this.props.setWordThunk}/>
    }
}


let mapStateToProps = (state: stateType) => {
    return {
    }
}

let WordConnectedContainer = connect(mapStateToProps, {setWordThunk})(WordContainer);

export default WordConnectedContainer;