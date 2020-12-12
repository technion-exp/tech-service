import React from 'react';
import Gallery from 'react-grid-gallery';
import './Finish.css';

function tileViewportStyleFn() { 
    return ({
            width: '175px',
            height: '220px',
            backgroundColor: 'white'
        });
}

function thumbnailStyleFn() { 
    var imgSrc = this.props.item.src;
    if (!imgSrc.includes('VIP')) {
        return ({
                width: '175px',
                height: '220px',
                backgroundColor: 'white',
                margin: '3px'
            });
    } 
    else {
        return ({
            width: '175px',
            height: '220px',
            backgroundColor: 'white',
            border: '8px solid transparent',
            borderImage: 'linear-gradient(to bottom, gold, rgba(0, 0, 0, 0)) 1 100%',
        });
    }
}

class Finish extends React.Component{
    constructor (props) {
      super(props)
      this.state = {
        showMore: false,
        finishDate: this.props.locationData.pData.finishDate,
        userItems: Array.from(this.props.locationData.pData.userItems),
        totalPrice: this.props.locationData.pData.totalPrice,
        budget: this.props.locationData.pData.budget
      }
    }


    
    render() {
        return (
            <div className="finish-flex-content">
                <h2>Greet! Almost done</h2>
                <h3>Finish Date {this.state.finishDate}</h3>
                <div className="finish-gallery">
                        <Gallery
                            tileViewportStyle={tileViewportStyleFn}
                            thumbnailStyle={thumbnailStyleFn}
                            enableLightbox={true}
                            images={this.state.userItems}
                            enableImageSelection={false}
                            margin={7}
                        />                
                </div>
                <label style={{"color": "green"}}>{"Budget: "+ this.state.budget.toFixed(2) + " $"}<br></br></label>
                <label style={{"color": "red"}}>{"Total: " + this.state.totalPrice.toFixed(2) + " $"} <br></br><br></br></label>   
                <button  onClick={()=> console.log("completed")}>COMPLETE</button>
            </div>
        );
    }
}

export default Finish;