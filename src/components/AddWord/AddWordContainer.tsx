import React from "react";
import { connect } from "react-redux";
import { stateType } from "../../redux/reduxStore";
import { addWordThunk } from '../../redux/addWordReducer';
import AddWord from "./AddWord";
import { wordInfoType } from "../../api/dal";


type mapStateToPropsType = {
    isWordSaved: boolean
}

type mapDispatchToPropsType = {
    addWordThunk: (wordInfo: wordInfoType) => void
}

type ownProps = {
}

type MyProps = mapStateToPropsType & mapDispatchToPropsType & ownProps

class AddWordContainer extends React.Component<MyProps> {

    componentDidMount() {
    }
    render() {
        return <AddWord addWordThunk={this.props.addWordThunk} isWordSaved={this.props.isWordSaved}/>
    }
}


let mapStateToProps = (state: stateType) => {
    return {
        isWordSaved: state.addWord.successfullyAdded 
    }
}


export default connect(mapStateToProps, {addWordThunk})(AddWordContainer);