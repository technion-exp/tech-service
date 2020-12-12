import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { withRouter } from 'react-router-dom';
import './WaitingRoom.css';

class WaitingRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isRedirect: true};
    this.routingFunction = this.routingFunction.bind(this);

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
  
  render() {
    var isRegular = this.props.isRegular;
    return ( 
      <div className="flex-content">
        {isRegular === true ? <h1>Regular User</h1> : <h1>Vip User</h1>}
        <CountdownCircleTimer
          onComplete={() => {
            this.routingFunction()
          }}
          isPlaying
          duration={3}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    )
  }
}

export default withRouter(WaitingRoom);