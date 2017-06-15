import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Component
import SlidesComponent from "../components/SlidesComponent";

//Actions
import { nextSlide, previousSlide } from "../actions/SlidesActions";

class SlidesContainer extends React.Component{
    render(){
        return <SlidesComponent {...this.props} />
    }
}

function bindStateToProps(store){
    return {
        ...store.slides
    }
}

function bindDispatchToProps(dispatcher){
    return bindActionCreators({
        nextSlide, previousSlide
    }, dispatcher);
}

export default connect(bindStateToProps,bindDispatchToProps)(SlidesContainer);