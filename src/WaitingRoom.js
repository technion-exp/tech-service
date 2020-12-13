import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { withRouter } from 'react-router-dom';
import './WaitingRoom.css';



var personDetails = [
  {
    animation1: {animation: 'stroll 5s linear'},
    animation2: {animation: 'walkanim 1s infinite steps(7)'},
    timeout: 5000
  }, 
  {
    animation1: {animation: 'stroll 3s linear'},
    animation2: {animation: 'walkanim 1s infinite steps(7)'},
    timeout: 3000
  }, 
  {
    animation1: {animation: 'stroll 10s linear'},
    animation2: {animation: 'walkanim 1s infinite steps(7)'}, 
    timeout: 10000
  }, 
  {
    animation1: {animation: 'stroll 3s linear'},
    animation2: {animation: 'walkanim 1s infinite steps(7)'}, 
    timeout: 3000
  }, 

]

class WaitingRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isRedirect: true, currentPerson: 0};
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


  removePerson() {
    var newPersons = this.state.currentPerson + 1
    console.log("removing " + this.state.currentPerson)
    if (newPersons === personDetails.length)
    {
      //this.routingFunction();
    }
    else {
      this.setState({currentPerson: newPersons})
    }
    
  }

  drawPerson(currentPerson) {
    var personDescription = personDetails[currentPerson];
    var numberStyle = currentPerson === 3 ? {color: 'Green'} : {color: 'Grey'}
    var personDisplay = currentPerson === 3 ? 'Your turn' : currentPerson;
    setTimeout(this.removePerson, personDescription.timeout)
    return (        
    <div id="walk-container" style={personDescription.animation1}>
      <div style={{paddingLeft: "40px"}}><label style={numberStyle}>{personDisplay}</label></div>
      <div id="walk" style={personDescription.animation2}></div>
    </div>)
  }
  px
  render() {
    var isRegular = this.props.isRegular;
    return ( 
      <div>
        <div className="flex-content">
          {this.state.currentPerson === 0 ? this.drawPerson(this.state.currentPerson) : null}
          {this.state.currentPerson === 1 ? this.drawPerson(this.state.currentPerson) : null}
          {this.state.currentPerson === 2 ? this.drawPerson(this.state.currentPerson) : null}
          {this.state.currentPerson === 3 ? this.drawPerson(this.state.currentPerson) : null}
          { this.state.currentPerson < 3 ? <h2> <br></br><br></br> {3-this.state.currentPerson} more persons</h2> : <h2> <br></br><br></br> Service is starting...</h2>}
        </div>
        
      </div>
    )
  }
}

export default withRouter(WaitingRoom);