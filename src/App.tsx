import React from 'react';
import s from './App.module.scss';
import Dictionary from './components/Dictionary/Dictionary';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import foto from './common/img/main_bg.png';
import { BrowserRouter, HashRouter } from 'react-router-dom';

class App extends React.Component<any> {
 

  render() {
    return (<HashRouter>
      <div className={s.appContainer} style={{ backgroundImage: `url(${foto})`}}>
        <Dictionary />
        <Header />
        <Container />
        <NavBar />
      </div>
      </HashRouter>
    );
  }
}

export default App;
