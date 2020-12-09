import React from 'react';
import Gallery from 'react-grid-gallery';
import './SelectorRoom.css';
import f1 from './images/Item_1_Fridge/1_655_555.jpg'


const defImages=[
    [
        {
            src: f1,
            thumbnail: f1,
            thumbnailWidth: 240,
            thumbnailHeight: 320,
            caption: "555.00",
            thumbnailCaption: (
                <div>
                    <del>
                        <span>655.00$</span>
                    </del>
                    <span> 555.00$</span>
                </div>
            ),
            isSelected: false,
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            isSelected: false,
            caption: "19.99",
            thumbnailCaption: (
                <div>
                    <del>
                        <span>20$</span>
                    </del>
                    <span> Vip option  19.99$</span>
                </div>
            )
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "30.00",
            thumbnailCaption: "30$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "40.00",
            thumbnailCaption: "40$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "126.00",
            thumbnailCaption: "126$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "333.00",
            thumbnailCaption: "333$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 148,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 213,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
            thumbnailWidth: 248,
            isSelected: false,
            thumbnailHeight: 320,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 113,
            caption: "99.99",
            thumbnailCaption: "99.99$"
        },
        {
            src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
            thumbnailWidth: 313,
            isSelected: false,
            thumbnailHeight: 320,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
            thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 213,
            caption: "15.00",
            thumbnailCaption: "15$"
        }
    ],
    [
        {
            src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
            thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 320,
            caption: "10.00",
            thumbnailCaption: "10$",
            isSelected: false,
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            isSelected: false,
            caption: "19.99",
            thumbnailCaption: (
                <div>
                    <del>
                        <span>20$</span>
                    </del>
                    <span> Vip option  19.99$</span>
                </div>
            )
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "30.00",
            thumbnailCaption: "30$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "40.00",
            thumbnailCaption: "40$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "126.00",
            thumbnailCaption: "126$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "333.00",
            thumbnailCaption: "333$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 148,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 213,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
            thumbnailWidth: 248,
            isSelected: false,
            thumbnailHeight: 320,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 113,
            caption: "99.99",
            thumbnailCaption: "99.99$"
        },
        {
            src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
            thumbnailWidth: 313,
            isSelected: false,
            thumbnailHeight: 320,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
            thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 213,
            caption: "15.00",
            thumbnailCaption: "15$"
        }
    ],
    [
        {
            src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
            thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 320,
            caption: "10.00",
            thumbnailCaption: "10$",
            isSelected: false,
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            isSelected: false,
            caption: "19.99",
            thumbnailCaption: (
                <div>
                    <del>
                        <span>20$</span>
                    </del>
                    <span> Vip option  19.99$</span>
                </div>
            )
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "30.00",
            thumbnailCaption: "30$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "40.00",
            thumbnailCaption: "40$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "126.00",
            thumbnailCaption: "126$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "333.00",
            thumbnailCaption: "333$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 190,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 148,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 213,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
            thumbnailWidth: 248,
            isSelected: false,
            thumbnailHeight: 320,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 113,
            caption: "99.99",
            thumbnailCaption: "99.99$"
        },
        {
            src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
            thumbnailWidth: 313,
            isSelected: false,
            thumbnailHeight: 320,
            caption: "15.00",
            thumbnailCaption: "15$"
        },
        {
            src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
            thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
            thumbnailWidth: 320,
            isSelected: false,
            thumbnailHeight: 213,
            caption: "15.00",
            thumbnailCaption: "15$"
        }
    ],
]

class SelectorRoom extends React.Component{
    constructor (props) {
      super(props)
      this.state = {
        showMore: false,
        images: defImages,
        itemNumber: 0,
        numOfItems: [2,2,2],
        selectedItems: [null,null,null],
        selectedItemsPrices: [0.0,0.0,0.0],
        budget: 100.0,
        totalPrice: 0.0,
        isScroll: false,
      }
    }
    handleRegularViewMoreClick() {
      let updatePicNumArr = this.state.numOfItems;
      updatePicNumArr[this.state.itemNumber] = this.state.numOfItems[this.state.itemNumber] === this.state.images[this.state.itemNumber].length ? this.state.numOfItems[this.state.itemNumber] : this.state.numOfItems[this.state.itemNumber]+1;
      this.setState({numOfItems: updatePicNumArr, isScroll: true})
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
        var images = this.state.images.slice();
        var currentItem = this.state.itemNumber;
        var sSelectedItems = this.state.selectedItems;
        var img = images[currentItem][index];
        var newPrice = this.state.totalPrice;
        var cSelectedItemsPrices = this.state.selectedItemsPrices;
        var newBudget = this.state.budget

        //select new image
        img.isSelected = true;

        if (sSelectedItems[currentItem] !== null)
        {
            if (sSelectedItems[currentItem] === index)
            {
                return;
            }
            var prevImg = images[currentItem][sSelectedItems[currentItem]];
            //unselect prev image
            prevImg.isSelected = false;
        }

        //calculate price here
        var currentPicPrice = parseFloat(img.caption)
        newPrice = (newPrice - cSelectedItemsPrices[currentItem] + currentPicPrice)
        newBudget = (newBudget + cSelectedItemsPrices[currentItem] - currentPicPrice)
        cSelectedItemsPrices[currentItem] = currentPicPrice
        sSelectedItems[currentItem] = index
        


        this.setState({
            images: images,
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


    render() {
        return (
            <div className="selector-fonts">
                <div className="selector-flex-content">
                    <div style={{"display": "flex", "flex-flow": "column", paddingRight: "1%", marginRight: "10px"}}>
                        <label style={{"color": "green"}}>{"Budget: "+ this.state.budget.toFixed(2) + " $"}</label>
                        <label style={{"color": "red"}}>{"Total: " + this.state.totalPrice.toFixed(2) + " $"} <br></br><br></br></label>
                        <button style= 
                        {
                            { 
                                "border-radius": "50%",
                                "background-color": "#4CAF50", /* Green */
                                "color": "white",
                                "padding": "24px",
                                "text-align": "center",
                                "text-decoration": "none",
                                "display": "inline-block",
                                "font-size": "14px",
                                "margin": "4px 2px",
                                "cursor": "pointer",
                                "border": "2px solid #cfdcec"
                            }
                        } 
                                onClick={()=> this.handleRegularViewMoreClick()}>View <br></br>additional <br></br>option<br></br> for 2 sec</button>
                        <button style= 
                        {
                            { 
                                "border-radius": "50%",
                                "background-color": "Red", /* Red */
                                "color": "white",
                                "padding": "20px",
                                "text-align": "center",
                                "text-decoration": "none",
                                "display": "inline-block",
                                "font-size": "14px",
                                "margin": "4px 2px",
                                "cursor": "pointer",
                                "border": "2px solid #cfdcec"
                            }
                        } 
                        onClick={()=> this.handleRegularViewMoreClick()}>View <br></br>additional <br></br>option<br></br> for 2 sec</button>
                    </div>
                    <div id="gal" className="gallery">
                        <h1>Choose an option you like most of all</h1>
                        <Gallery
                            images={this.state.images[this.state.itemNumber].slice(0, this.state.numOfItems[this.state.itemNumber])}
                            enableImageSelection={true}
                            onSelectImage={(index, image) => this.onSelectImage(index, image)}
                        />                
                    </div>
                </div>   
                <div className="item_buttons">
                    <button disabled={this.state.itemNumber === 0} onClick={()=> this.handlePrevClick()}>Previous Item</button>
                    {this.isAllItemsSelected() ? <button onClick={()=> this.handleNextClick()}>Finish</button> : null}
                    <button disabled={this.state.itemNumber === this.state.images.length-1} onClick={()=> this.handleNextClick()}>Next Item</button>
                </div>
            </div>
        );
    }
  }
  
  export default SelectorRoom;