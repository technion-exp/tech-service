import React from 'react';
import './Agree.css';
import { withRouter } from "react-router";

class Agree extends React.Component{
    constructor (props) {
      super(props)
      this.state = {
        isAgree: false
      }
    }

    handleClick = () => {
      if (this.props.isRegular === true) {
        this.props.history.push({
            pathname: '/r/story'
        });
      }
      else {
        this.props.history.push({
          pathname: '/v/story'
        });
      }
    }

    handleAgreeCheck() {
        this.setState({isAgree: !this.state.isAgree})
    }

    render(){
      return (
       <div className="agree-flex-content">
           <h1>Hello!</h1>
           <h2>Agree text</h2>
           <div>
            <input type="checkbox" id="agree_check" checked={this.state.isAgree} onChange={() => this.handleAgreeCheck()}/>
            <label> Yes, I agree.</label>
           </div>
           <br></br>
          <button disabled={!this.state.isAgree} onClick={()=> this.handleClick()}>Next</button>
       </div>
      );
    }
  }
  
  export default withRouter(Agree);