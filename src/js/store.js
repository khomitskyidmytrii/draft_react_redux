/**
 * Created by jasonc on 7/15/16.
 */

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger"; // amazing logger
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "../reducers";

// attach applyMiddleware to middleware constant
// attach functions to middleware
// add promise if wanting it
const middleware = applyMiddleware(promise(), thunk, logger());

// usually an object for the second parameter
// accepts all reducers **
// export this
export default createStore(reducer, middleware);