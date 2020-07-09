import React, { FunctionComponent } from "react";
import s from './Container.module.scss';
import SearchContainer from "../Search/SearchContainer";
import { Route } from "react-router-dom";
import AllWordContainer from "../AllWords/AllWordsContainer";
import WordSettingsContainer from "../WordSettings/WordSettingsContainer";
import AddWordContainer from "../AddWord/AddWordContainer";
interface ContainerProps {

}

let Container: FunctionComponent<ContainerProps> = (props) => {
    return (
        <div className={s.container}>
            <Route path="/allwords" render={() => <AllWordContainer />}/>
            <Route path="/search" render={() => <SearchContainer />}/>
            <Route path="/addword" render={() => <AddWordContainer />}/>
            <Route path="/wordSettings" render={() => <WordSettingsContainer />}/>
        </div>)
}

export default Container;