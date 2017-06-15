import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

//Main Component
import App from "./components/App.js";

//Css
import base from "./styles/base.scss";

//reducers
import reducers from "./reducers";
let store = createStore(reducers, applyMiddleware(logger, thunk));


document.write("<div id='app'></div>");

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("app"));