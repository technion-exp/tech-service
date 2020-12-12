import React from 'react';
import Gallery from 'react-grid-gallery';
import './Finish.css';
import './my-button.css';
import emailjs from 'emailjs-com';

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
        budget: this.props.locationData.pData.budget,
        isRegular: this.props.locationData.pData.isRegular,
        clickedRegularViewMore: this.props.locationData.pData.clickedRegularViewMore,
        clickedVipViewMore: this.props.locationData.pData.clickedVipViewMore,
      }
    }

    sendReportToEmail() {
        var templateParams = {
            finishDate: this.state.finishDate,
            totalPrice: this.state.totalPrice,
            budget: this.state.budget,
            from_name: 'Experiment',
            isRegular: this.state.isRegular,
            clickedRegularViewMore: this.state.clickedRegularViewMore,
            clickedVipViewMore: this.state.clickedVipViewMore,
        };
         
        emailjs.send('service_8ww919p', 'template_h1x55nb', templateParams, 'user_KnDPo0mi8tW6gzapNbVeb')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
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
                <button className="my-button"  onClick={()=> this.sendReportToEmail()}>COMPLETE</button>
            </div>
        );
    }
}

export default Finish;