import React from 'react';
import Gallery from 'react-grid-gallery';

class SelectorRoom extends React.Component{
    constructor (props) {
      super(props)
      this.state = {
        showMore: false
      }
    }
    handleClick() {
      this.setState({showMore: true})
    }
    render(){
      const list = [
        'list 1',
        'list 2',
        'item 3',
        'item 4',
        'item 5',
        'item 6',
        'item 7',
        'item 8',
        'item 9',
        'item 10',
        'item 11',
        'item 12',
        'item 12',
        'item 14',
        'item 15',
        'item 16',
        'item 17',
        'item 18',
      ]
      
      const numberOfItems = this.state.showMore ? list.length : 10
      return (
       <div>
          {list.slice(0, numberOfItems).map((item)=> {
            return (
            <div>{item}</div>
             )
          })}
          <button onClick={()=> this.handleClick()}>Show more</button>
       </div>
      );
    }
  }
  



  .btn-grad {background-image: linear-gradient(to right, #F09819 0%, #EDDE5D  51%, #F09819  100%)}
  .btn-grad {
     margin: 10px;
     padding: 15px 45px;
     text-align: center;
     text-transform: uppercase;
     transition: 0.5s;
     background-size: 200% auto;
     color: white;            
     box-shadow: 0 0 20px #eee;
     border-radius: 10px;
     display: block;
   }

   .btn-grad:hover {
     background-position: right center; /* change the direction of the change here */
     color: #fff;
     text-decoration: none;
   }
  

   @keyframes walkanim {
    to { background-position: 100% 0; }
  }
  @keyframes stroll {
    from { transform: translateX(-100%); }
    to { transform: translateX(500%); }
  }
  #walk-container {
    display: inline-block;
    position: relative;
    width: 20%;
    padding-bottom: 30%; 
    vertical-align: middle; 
    overflow: hidden; 
    animation: stroll 5s linear;
  }
  #walk {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/walk-sequence.svg);
    background-repeat: no-repeat;
    background-size: 800%;
    
  }