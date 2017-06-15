const initialState = {
    currentSlide: 0,
    slides: [
        "Slide1", "Slide2", "Slide3"
    ]
}

export default (state = initialState, action) => {
    switch(action.type){
        case "NEXT_SLIDE":
            var { currentSlide, slides } = state;
            currentSlide = (currentSlide + 1)%slides.length;
            return {
                ...state,
                currentSlide: currentSlide
            }
        case "PREVIOUS_SLIDE":
            var { currentSlide, slides } = state;
            currentSlide = (currentSlide + slides.length - 1)%slides.length;
            return {
                ...state,
                currentSlide: currentSlide
            }
    }
    return state;
}