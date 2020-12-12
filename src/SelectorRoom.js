import React from 'react';
import Gallery from 'react-grid-gallery';
import './SelectorRoom.css';
import {getImages} from './imagesStore'
import { withRouter } from 'react-router-dom';
import CircProgress from './circular_wait';
import BotNav from './BotNav'


var added = false


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
                backgroundColor: 'white'
            });
    } 
    else {
        return ({
            width: '175px',
            height: '220px',
            backgroundColor: 'white',
            border: '8px solid transparent',
            borderImage: 'linear-gradient(to bottom, gold, rgba(0, 0, 0, 0)) 1 100%'
        });
    }
}


class SelectorRoom extends React.Component{
    constructor (props) {
        var defImages = getImages();
        const initImages1 = (defImages[0].regularImages.map(item => 
                                        {
                                            item.isSelected = false;
                                            return item
                                        })).slice(0,2)
        const initImages2 = (defImages[1].regularImages.map(item => 
                                        {
                                        item.isSelected = false;
                                        return item
                                        })).slice(0,2)
        const initImages3 = (defImages[2].regularImages.map(item => 
                                        {
                                        item.isSelected = false;
                                        return item
                                        })).slice(0,2)
        super(props)
        this.state = {
            showMore: false,
            images: defImages,
            itemNumber: 0,
            numOfRegularItems: [2,2,2],
            numOfVipItems: [0,0,0],
            selectedItems: [null,null,null],
            selectedItemsPrices: [0.0,0.0,0.0],
            budget: 3000.0,
            totalPrice: 0.0,
            isScroll: false,
            displyedItemImages: [initImages1, initImages2, initImages3],
            isRegular: this.props.isRegular,
            totalTime: 0,
        }
    }


    handleRegularViewMoreClick() {
        var newImages = [Array.from(this.state.displyedItemImages[0]), Array.from(this.state.displyedItemImages[1]), Array.from(this.state.displyedItemImages[2])];
        let updatePicNumArr = this.state.numOfRegularItems;
        if (this.state.numOfRegularItems[this.state.itemNumber] !== this.state.images[this.state.itemNumber].regularImages.length)
        {
            updatePicNumArr[this.state.itemNumber] = this.state.numOfRegularItems[this.state.itemNumber]+1;
            newImages[this.state.itemNumber].push(this.state.images[this.state.itemNumber].regularImages[updatePicNumArr[this.state.itemNumber]-1]);
            this.setState({displyedItemImages: newImages, numOfRegularItems: updatePicNumArr, isScroll: true})
        }
        else {
            //nothing to add more
        }
    }

    handleVipViewMoreClick() {
        var newImages = [Array.from(this.state.displyedItemImages[0]), Array.from(this.state.displyedItemImages[1]), Array.from(this.state.displyedItemImages[2])];
        let updatePicNumArr = this.state.numOfVipItems;
        if (this.state.numOfVipItems[this.state.itemNumber] !== this.state.images[this.state.itemNumber].vipImages.length)
        {
            updatePicNumArr[this.state.itemNumber] = this.state.numOfVipItems[this.state.itemNumber]+1;
            newImages[this.state.itemNumber].push(this.state.images[this.state.itemNumber].vipImages[updatePicNumArr[this.state.itemNumber]-1]);
            this.setState({displyedItemImages: newImages, numOfVipItems: updatePicNumArr, isScroll: true})
        }
        else {
            //nothing to add more
        }
    }

    handleNextClick() {
        this.setState({itemNumber: this.state.itemNumber+1, isScroll: false})
      }

    handlePrevClick() {
        this.setState({itemNumber: this.state.itemNumber-1, isScroll: false})
    }

    isAllItemsSelected() {
        var itemsArray = this.state.selectedItems;
        if (itemsArray[0] !== null && itemsArray[1] !== null && itemsArray[2] !== null && this.state.itemNumber === 2) {
            return true;
        }
        else {
            return false;
        }
    }


    onSelectImage (index, image) {
        var currentItem = this.state.itemNumber;
        var displayedImages = this.state.displyedItemImages.slice();
        var sSelectedItems = this.state.selectedItems;
        var img = displayedImages[currentItem][index];
        var newPrice = this.state.totalPrice;
        var cSelectedItemsPrices = this.state.selectedItemsPrices;
        var newBudget = this.state.budget

        //calculate price here
        var currentPicPrice = parseFloat(img.caption)
        newPrice = (newPrice - cSelectedItemsPrices[currentItem] + currentPicPrice)
        newBudget = (newBudget + cSelectedItemsPrices[currentItem] - currentPicPrice)

        if (newBudget < 0) {
            alert("Not enough balance!");
            return;
        }

        //select new image
        img.isSelected = true;


        if (sSelectedItems[currentItem] !== null)
        {
            if (sSelectedItems[currentItem] === index)
            {
                return;
            }
            var prevImg = displayedImages[currentItem][sSelectedItems[currentItem]];
            //unselect prev image
            prevImg.isSelected = false;
        }

        cSelectedItemsPrices[currentItem] = currentPicPrice
        sSelectedItems[currentItem] = index
        


        this.setState({
            displayedImages: displayedImages,
            selectedItems: sSelectedItems,
            totalPrice: newPrice,
            selectedItemsPrices: cSelectedItemsPrices,
            budget: newBudget,
            isScroll: false,
        });
    }
    
    componentDidUpdate() {
        //scroll div
        if (this.state.isScroll === false)
        {
            return;
        }
        const objDiv = document.getElementById('gal');
        objDiv.scrollTop = objDiv.scrollHeight;
    }
      
      

    isNextItemEnabled() {
        return (this.state.itemNumber < this.state.images.length-1) && (this.state.selectedItems[this.state.itemNumber] !== null)
    }

    handleFinishClick = () => {
        //prepare data
        //calculate finish date
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        //prepare choosen items
        var allSelectedItems = this.state.selectedItems;
        var allDisplyedItemImages = this.state.displyedItemImages;
        var userChoices = [allDisplyedItemImages[0][allSelectedItems[0]], allDisplyedItemImages[1][allSelectedItems[1]],allDisplyedItemImages[2][allSelectedItems[2]]];
        var userData = {
            finishDate: dateTime, 
            userItems: userChoices, 
            spendTime: this.state.totalTime, 
            totalPrice: this.state.totalPrice,
            budget: this.state.budget,
        }
          this.props.history.push({
              pathname: '/complete_purchase',
              pData: userData
          });
      }

    render() {
        return (
            <div className="selector-fonts">
                <h2 style={{margin: '0px', paddingTop: '3px', paddingLeft: '15%', paddingRight: '15%'}}>Choose an option you like most of all</h2>
                <div className="selector-flex-content">
                    <div style={{"display": "flex", "flexFlow": "column", paddingRight: "1%", marginRight: "10px"}}>
                        <button style= 
                        {
                            { 
                                "borderRadius": "50%",
                                "background": 'linear-gradient(to right, Green 0%, Green  51%, Green  100%)',
                                "color": "white",
                                "padding": "24px",
                                "textAlign": "center",
                                "textDecoration": "none",
                                "display": "inline-block",
                                "fontSize": "14px",
                                "margin": "4px 2px",
                                "cursor": "pointer",
                                "border": "2px solid #cfdcec",
                                "maxWidth": "126px",
                            }
                        } 
                                onClick={()=> this.handleRegularViewMoreClick()}>View additional option for 2 sec</button>
                        { this.props.isRegular === false ? <button style= 
                        {
                            { 
                                "borderRadius": "50%",
                                "background": 'linear-gradient(to right, #F09819 0%, #EDDE5D  51%, #F09819  100%)',
                                "color": "#0f4c81",
                                "padding": "20px",
                                "textAlign": "center",
                                "textDecoration": "none",
                                "display": "inline-block",
                                "fontSize": "14px",
                                "margin": "4px 2px",
                                "cursor": "pointer",
                                "border": "2px solid #cfdcec",
                                "maxWidth": "117px",
                            }
                        } 
                        onClick={()=> this.handleVipViewMoreClick()}>View VIP option for 2 sec</button> : null}
                        <CircProgress></CircProgress>
                    </div>
                    <div id="gal" className="gallery">
                        <Gallery
                            tileViewportStyle={tileViewportStyleFn}
                            thumbnailStyle={thumbnailStyleFn}
                            enableLightbox={false}
                            onClickThumbnail={(index) => this.onSelectImage(index, null)}
                            images={this.state.displyedItemImages[this.state.itemNumber]}
                            enableImageSelection={false}
                            onSelectImage={(index, image) => this.onSelectImage(index, image)}
                            margin={5}
                        />                
                    </div>
                </div>
                <label style={{"color": "green"}}>{"Budget: "+ this.state.budget.toFixed(2) + " $"}<br></br></label>
                <label style={{"color": "red"}}>{"Total: " + this.state.totalPrice.toFixed(2) + " $"} <br></br><br></br></label>   
                <div className="item_buttons">
                    <button disabled={this.state.itemNumber === 0} onClick={()=> this.handlePrevClick()}>Previous Item</button>
                    {this.isAllItemsSelected() ? <button onClick={()=> this.handleFinishClick()}>Finish</button> : null}
                    <button disabled={!this.isNextItemEnabled()} onClick={()=> this.handleNextClick()}>Next Item</button>
                    <BotNav></BotNav>
                </div>
                
            </div>
        );
    }
  }
  
  export default withRouter(SelectorRoom);