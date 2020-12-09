import React from 'react';
import Sidebar from './Sidebar';
import WaitingRoom from './WaitingRoom'
import './App.css';
import { createBrowserHistory } from "history";
import SelectorRoom from './SelectorRoom';
import Agree from './Agree';
import Story from './Story';
import { withRouter } from "react-router";

import { HashRouter, Route, Link } from "react-router-dom";

const browserHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return (
      <div className="App" id="outer-container">
        <HashRouter history={browserHistory} basename={process.env.PUBLIC_URL}>
          <Route render = {({ location }) => (
            <Layout location = { location }>
              <Switch location = { location }>
                  <Route exact path = '/' component = { Home } />
                  <Route exact path = '/buttons/' component = { Buttons } />
                  <Route component = { NotFound }/>
                </Switch>
            </Layout>
          )} />
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <Route exact path="/tech-service/r" component={() => <Agree history = {browserHistory} isRegular={true}/>} />
        <Route path="/tech-service/r/story" component={() => <Story history = {browserHistory} isRegular={true}/>} />
        <Route path="/tech-service/r/wait_room" component={() => <WaitingRoom name={'незнакомец'} history = {browserHistory} isRegular={true}/>} />
        <Route path="/tech-service/r/selector" component={() => <SelectorRoom isRegular={true}/>} />
        <Route exact path="/tech-service/v" component={() => <Agree history = {browserHistory}/>} />
        <Route path="/tech-service/v/story" component={() => <Story history = {browserHistory}/>} />
        <Route path="/tech-service/v/wait_room" component={() => <WaitingRoom name={'незнакомец'} history = {browserHistory}/>} />
        <Route path="/tech-service/v/selector" component={SelectorRoom} />
        </HashRouter>
      </div>
    );
  }
}

export default App;