import React from 'react';
import './Story.css';
import { withRouter } from "react-router";
import './my-button.css'

class Story extends React.Component{
    constructor (props) {
      super(props)
      this.state = {
        isAgree: false
      }
    }

    handleClick = () => {
      if (this.props.isRegular === true) {
        this.props.history.push({
            pathname: '/r/wait_room'
        });
      }
      else {
        this.props.history.push({
          pathname: '/v/wait_room'
        });
      }
    }

    render(){
      var isRegular = this.props.isRegular;
      return (
       <div className="story-flex-content">
           <h1>Hello!</h1>
           <h2>Story text</h2>
            {isRegular === true ? <h3>Regular user</h3> : <h3>VIP user</h3> }
           <br></br>
          <button className="my-button" onClick={()=> this.handleClick()}>Lets start</button>
       </div>
      );
    }
  }
  
  export default withRouter(Story);