import React from 'react';
import ReactCardSlider from 'react-card-slider-component';

const Slider = () => {

    const slides = [
        {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
        {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description"},
        {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description"},
        
    ];
    return (
        <div>
                    <ReactCardSlider slides={slides}>
             
             </ReactCardSlider>
        </div>
    );
};

export default Slider;