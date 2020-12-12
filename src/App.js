import React from 'react';
import Sidebar from './Sidebar';
import WaitingRoom from './WaitingRoom'
import './App.css';
import { createBrowserHistory } from "history";
import SelectorRoom from './SelectorRoom';
import Agree from './Agree';
import Story from './Story';
import Finish from './Finish'
import About from './About'
import { withRouter, Switch } from "react-router";

import { HashRouter, Route, Link } from "react-router-dom";

const browserHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <div className="App" id="outer-container">
        <HashRouter history={browserHistory} >
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} history = {browserHistory}/>
          <Route render = {({ location }) => (
              <Switch location = { location }>
                  <Route exact path="/r/" component={() => <Agree history = {browserHistory} isRegular={true}/>} />
                  <Route path="/r/story" component={() => <Story history = {browserHistory} isRegular={true}/>} />
                  <Route path="/r/wait_room" component={() => <WaitingRoom  history = {browserHistory} isRegular={true}/>} />
                  <Route path="/r/selector" component={() => <SelectorRoom isRegular={true}/>} />
                  <Route exact path="/v/" component={() => <Agree history = {browserHistory} isRegular={false}/>} />
                  <Route path="/v/story" component={() => <Story history = {browserHistory}/>} isRegular={false}/>
                  <Route path="/v/wait_room" component={() => <WaitingRoom  history = {browserHistory}/>} isRegular={false}/>
                  <Route path="/v/selector" component={() => <SelectorRoom history = {browserHistory} isRegular={false}/>} />
                  <Route path="/complete_purchase" component={() => <Finish locationData = {location} isRegular={false}/>} />
                  <Route path="/about" component={() => <About/>} />
                </Switch>
          )} />
        </HashRouter>
      </div>
    );
  }
}

export default App;