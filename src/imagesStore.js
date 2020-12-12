import f1 from './images/Item_1_Fridge/1_655_555.jpg';
import f2 from './images/Item_1_Fridge/2_655_555.jpg';
import f3 from './images/Item_1_Fridge/3_709_599.jpg';
import f4 from './images/Item_1_Fridge/4_1559_1359.jpg';
import f5 from './images/Item_1_Fridge/5_881.jpg';
import f6 from './images/Item_1_Fridge/6_908.jpg';
import f7 from './images/Item_1_Fridge/7_1079.png';
import f8 from './images/Item_1_Fridge/8_769.png';
import f9v from './images/Item_1_Fridge/9_1878_1314_VIP.jpg';
import f10v from './images/Item_1_Fridge/10_1079_755_VIP.png';

import w1 from './images/Item_2_Worktop/1_1499.png';
import w2 from './images/Item_2_Worktop/2_1745_1483.png';
import w3 from './images/Item_2_Worktop/3_1499_1274.png';
import w4 from './images/Item_2_Worktop/4_299.png';
import w5 from './images/Item_2_Worktop/5_449.png';
import w6 from './images/Item_2_Worktop/6_599.png';
import w7 from './images/Item_2_Worktop/7_1299.png';
import w8 from './images/Item_2_Worktop/8_1299_1104.jpeg';
import w9v from './images/Item_2_Worktop/9_2499_1749_VIP.png';
import w10v from './images/Item_2_Worktop/10_2449_1749_VIP.png';

import c1 from './images/Item_3_Cookstove/1_399_339.jpg';
import c2 from './images/Item_3_Cookstove/2_449_381.jpg';
import c3 from './images/Item_3_Cookstove/3_529.jpg';
import c4 from './images/Item_3_Cookstove/4_599.jpg';
import c5 from './images/Item_3_Cookstove/5_299_254.jpg';
import c6 from './images/Item_3_Cookstove/6_339.jpg';
import c7 from './images/Item_3_Cookstove/7_259_220.jpg';
import c8 from './images/Item_3_Cookstove/8_389_330.jpg';
import c9v from './images/Item_3_Cookstove/9_699_489_VIP.jpg';
import c10v from './images/Item_3_Cookstove/10_1399_979_VIP.jpg';


var fr1 = {
        src: f1,
        thumbnail: f1,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "555.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span> 655.00$ <br></br></span>
                </del>
                <span> 555.00$</span>
            </div>
        ),
        isSelected: false,
    }

var fr2 = {
        src: f2,
        thumbnail: f2,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "555.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>655.00$<br></br></span>
                </del>
                <span> 555.00$</span>
            </div>
        ),
        isSelected: false,
    }

var fr3 = {
        src: f3,
        thumbnail: f3,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "599.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>709.00$<br></br></span>
                </del>
                <span> 599.00$</span>
            </div>
        ),
        isSelected: false,
    }

var fr4 = {
        src: f4,
        thumbnail: f4,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1359.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>1559.00$<br></br></span>
                </del>
                <span> 1359.00$</span>
            </div>
        ),
        isSelected: false,
    }

var fr5 = {
        src: f5,
        thumbnail: f5,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "881.00",
        thumbnailCaption: (<span> <br></br>881.00$ </span>),
        isSelected: false,
    }

var fr6 = {
        src: f6,
        thumbnail: f6,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "908.00",
        thumbnailCaption: (<span><br></br> 908.00$ </span>),
        isSelected: false,
    }

var fr7 = {
        src: f7,
        thumbnail: f7,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1079.00",
        thumbnailCaption: (<span> <br></br> 1079.00$ </span>),
        isSelected: false,
    }

var fr8 = {
        src: f8,
        thumbnail: f8,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "769.00",
        thumbnailCaption: (<span><br></br>769.00$</span>),
        isSelected: false,
    }

var fr9v = {
        src: f9v,
        thumbnail: f9v,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1314.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>1878.00$ <br></br></span>
                </del>
                <span style={{"color":"green"}}>VIP Price: 1314.00$</span>
            </div>
        ),
        isSelected: false,
    }

var fr10v = {
        src: f10v,
        thumbnail: f10v,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "755.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span> 1079.00$<br></br></span>
                </del>
                <span style={{"color":"green"}}>VIP Price: 755.00$</span>
            </div>
        ),
        isSelected: false,
    }


var wt1 = {
        src: w1,
        thumbnail: w1,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1499.00",
        thumbnailCaption: (<span><br></br>1499.00$</span>),
        isSelected: false,
    }

var wt2 = {
        src: w2,
        thumbnail: w2,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1483.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>1745.00$<br></br></span>
                </del>
                <span> 1483.00$</span>
            </div>
        ),
        isSelected: false,
    }

var wt3 = {
        src: w3,
        thumbnail: w3,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1274.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>1499.00$<br></br></span>
                </del>
                <span> 1274.00$</span>
            </div>
        ),
        isSelected: false,
    }

var wt4 = {
        src: w4,
        thumbnail: w4,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "299.00",
        thumbnailCaption: (<span><br></br>299.00$</span>),
        isSelected: false,
    }

var wt5 = {
        src: w5,
        thumbnail: w5,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "449.00",
        thumbnailCaption: (<span><br></br>449.00$</span>),
        isSelected: false,
    }

var wt6 = {
        src: w6,
        thumbnail: w6,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "599.00",
        thumbnailCaption: (<span><br></br>599.00$</span>),
        isSelected: false,
    }

var wt7 = {
        src: w7,
        thumbnail: w7,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1299.00",
        thumbnailCaption: (<span><br></br>1299.00$</span>),
        isSelected: false,
    }

var wt8 = {
        src: w8,
        thumbnail: w8,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1104.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>1299.00$<br></br></span>
                </del>
                <span>1104.00$</span>
            </div>
        ),
        isSelected: false,
    }

var wt9v = {
        src: w9v,
        thumbnail: w9v,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1749.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>2499.00$<br></br></span>
                </del>
                <span style={{"color":"green"}}>VIP Price: 1749.00$</span>
            </div>
        ),
        isSelected: false,
    }

var wt10v = {
        src: w10v,
        thumbnail: w10v,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "1749.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>2449.00$<br></br></span>
                </del>
                <span style={{"color":"green"}}>VIP Price: 1749.00$</span>
            </div>
        ),
        isSelected: false,
    }



var cs1 = {
        src: c1,
        thumbnail: c1,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "339.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>399.00$<br></br></span>
                </del>
                <span>339.00$</span>
            </div>
        ),
        isSelected: false,
    }

var cs2 = {
        src: c2,
        thumbnail: c2,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "381.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>449.00$<br></br></span>
                </del>
                <span>381.00$</span>
            </div>
        ),
        isSelected: false,
    }

var cs3 = {
        src: c3,
        thumbnail: c3,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "529.00",
        thumbnailCaption: (<span><br></br>529.00$</span>),
        isSelected: false,
    }

var cs4 = {
        src: c4,
        thumbnail: c4,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "599.00",
        thumbnailCaption: (<span><br></br>599.00$</span>),
        isSelected: false,
    }

var cs5 = {
        src: c5,
        thumbnail: c5,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "254.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>299.00$<br></br></span>
                </del>
                <span>254.00$</span>
            </div>
        ),
        isSelected: false,
    }

var cs6 = {
        src: c6,
        thumbnail: c6,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "339.00",
        thumbnailCaption: (<span><br></br>339.00$</span>),
        isSelected: false,
    }

var cs7 = {
        src: c7,
        thumbnail: c7,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "220.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>259.00$<br></br></span>
                </del>
                <span>220.00$</span>
            </div>
        ),
        isSelected: false,
    }

var cs8 = {
        src: c8,
        thumbnail: c8,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "330.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>389.00$<br></br></span>
                </del>
                <span>330.00$</span>
            </div>
        ),
        isSelected: false,
    }

var cs9v = {
        src: c9v,
        thumbnail: c9v,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "489.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>699.00$<br></br></span>
                </del>
                <span style={{"color":"green"}}>VIP Price: 489.00$</span>
            </div>
        ),
        isSelected: false,
    }

var cs10v = {
        src: c10v,
        thumbnail: c10v,
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "979.00",
        thumbnailCaption: (
            <div>
                <del>
                    <span>1399.00$<br></br></span>
                </del>
                <span style={{"color":"green"}}>VIP Price: 979.00$</span>
            </div>
        ),
        isSelected: false,
    }

const images = [
    {
      regularImages: [fr1, fr2, fr3, fr4, fr5, fr6, fr7, fr8],
      vipImages: [fr9v, fr10v]
    },
    {
        regularImages: [wt1, wt2, wt3, wt4, wt5, wt6, wt7, wt8],
        vipImages: [wt9v, wt10v]
    },
    {
        regularImages: [cs1, cs2, cs3, cs4, cs5, cs6, cs7, cs8],
        vipImages: [cs9v, cs10v]
    }
]
export const getImages = ()=> {
    return images;
}