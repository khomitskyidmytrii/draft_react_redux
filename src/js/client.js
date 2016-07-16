/**
 * Created by jasonc on 7/14/16.
 */

// necessary components for app rendering
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "../components/Layout";
import store from "./store";

const app = document.getElementById("app");
ReactDOM.render(<Provider store={store}>
    <Layout/>
</Provider>, app);

/****************************************************************************/

// initial state (default)
/*const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};*/

// returns new state
// acts upon the store
// all actions go in here
/*const reducer = (state=initialState, action) => {
    switch (action.type) {
        // default pending from promise
        case "FETCH_USERS_PENDING": {
            return {...state, fetching: true};
            break;
        }
        // default rejection from promise
        case "FETCH_USERS_REJECTED": {
            return {...state, fetching: false,
                error: action.payload};
            break;
        }
        // default fulfilled from promise
        case "FETCH_USERS_FULFILLED": {
            return {...state, fetching: false,
                fetched: true,
                users: action.payload};

            break;
        }
    }
    return state;
};*/

// logs middleware actions
/*const consoleLogger = (store) => (next) => (action) => {
    console.log("Action fired", action);
    next(action); // calling next action
};*/

// error handling
/*const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (e) {
        console.log("Error statement: ", e);
    }
};*/


// old subscription method
/*store.subscribe(() => {
    console.log("store changed: ", store.getState());
});*/

// state and action (payload)
// test data
/*store.dispatch({type: "CHANGE_NAME", payload: "Jason"});
store.dispatch({type: "CHANGE_AGE", payload: 23});
store.dispatch({type: "CHANGE_NAME", payload: "Bill"});
store.dispatch({type: "CHANGE_AGE", payload: 25});*/

// multiple actions with one dispatcher
// manual way
/*store.dispatch((dispatch) => {
    dispatch({type: "FETCH_USERS_START"});
    axios.get("http://rest.learncode.academy/api/wstern/users") // fetch API
        .then((response) => {
            dispatch({type: "RECEIVE_USERS", payload: response.data}); // catch data
        })
        .catch((err) => {
            dispatch({type: "FETCH_USERS_ERROR", payload: err});
        });
});*/

// promise style (simpler)
/*store.dispatch({
    type: "FETCH_USERS",
    payload: axios.get("http://rest.learncode.academy/api/wstern/users") // fetch API
});*/
