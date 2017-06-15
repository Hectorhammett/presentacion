import React from "react";

class Slide extends React.Component{
    render(){
        return (
            <div className="slide">
                { this.props.children }
            </div>
        )
    }
}

export default Slide;