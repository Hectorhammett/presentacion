import React from "react";

//Components
import Slide from "./Slide";

//Styles
import SlidesHolderStyle from "../styles/slides-component.scss";

class SlidesComponent extends React.Component{
    componentDidMount(){
        const { nextSlide, previousSlide } = this.props;

        document.addEventListener("keydown", function(event){
            switch(event.key){
                case "ArrowRight": 
                    nextSlide();
                    break;
                case "ArrowLeft":
                    previousSlide();
                    break;
            }
        })
    }

    createSlidesList(){
        const { slides } = this.props;
        return slides.map((slide) => {
            return <Slide>{slide}</Slide>
        });
    }

    render(){
        const { slides, currentSlide } = this.props;

        let slidesArray = this.createSlidesList();

        return (
            <div className="slides-holder">
                { slidesArray[currentSlide] }
            </div>
        )
    }
}

export default SlidesComponent;