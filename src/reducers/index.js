/**
 * Created by jasonc on 7/15/16.
 */

import { combineReducers } from "redux";

// importing reducers (multiple reducers)
import user from "./userReducer";
import tweets from "./tweetsReducer";

// only acts on each reducer (combining them)
export default combineReducers({
    user,
    tweets
});
