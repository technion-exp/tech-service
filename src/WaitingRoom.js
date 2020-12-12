import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { withRouter } from 'react-router-dom';
import './WaitingRoom.css';


var numOfPersons = 8;

class WaitingRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isRedirect: true, persons: [true,true,true,true,true,true,true,true,]};
    this.routingFunction = this.routingFunction.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }

  routingFunction = () => {
    if (this.props.isRegular === true) {
      this.props.history.push({
          pathname: '/r/selector'
      });
    }
    else {
      this.props.history.push({
        pathname: '/v/selector'
      });
    }
  }


  removePerson(timing) {
    var newPersons = this.state.persons;
    newPersons[timing] = false;
    this.setState({persons: newPersons})
  }

  drawPerson(contStyleObject, walkStyleObject, timing) {
    setTimeout(this.removePerson, timing.timeout, timing.person-1)
    return (        
    <div id="walk-container" style={contStyleObject}>
      <div id="walk" style={walkStyleObject}></div>
    </div>)
  }
  
  render() {
    var isRegular = this.props.isRegular;
    return ( 
      <div className="flex-content">
        {this.drawPerson({animation: 'stroll 9s linear'}, {animation: 'walkanim 1s infinite steps(7)', border: '2px solid green'}, {timeout: 4000, person: 6})}
        {this.drawPerson({animation: 'stroll 8s linear'}, {animation: 'walkanim 1s infinite steps(7)'}, {timeout: 4000, person: 5})}
        {this.drawPerson({animation: 'stroll 7s linear'}, {animation: 'walkanim 1s infinite steps(7)'}, {timeout: 4000, person: 4})}
        {this.drawPerson({animation: 'stroll 6s linear'}, {animation: 'walkanim 1s infinite steps(7)'}, {timeout: 4000, person: 3})}
        {this.drawPerson({animation: 'stroll 5s linear'}, {animation: 'walkanim 1s infinite steps(7)'}, {timeout: 4000, person: 2})}
        {this.state.persons[0] === true ? this.drawPerson({animation: 'stroll 4s linear'}, {animation: 'walkanim 1s infinite steps(7)'}, {timeout: 10000, person: 1}) : null}

      </div>
    )
  }
}

export default withRouter(WaitingRoom);