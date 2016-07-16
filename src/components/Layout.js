/**
 * Created by jasonc on 7/15/16.
 */

import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

// injects props in layouts
@connect((store) => {
    return {
        user: store.user.user, //store.user(reducer).user(array)
        userFetched: store.user.fetched, // show fetched property
        tweets: store.tweets.tweets //store.tweets(reducer).tweets(array)
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser());
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets());
    }
    render() {
        console.log(this.props);
        const {user, tweets} = this.props;
        if (!tweets.length) {
            return <button onClick={this.fetchTweets.bind(this)}>Load tweets</button>
        }

        // maps out list
        const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>);
        return(
            <div>
                <h2>{user.name}</h2>
                <h2>{user.age}</h2>
                <ul>{mappedTweets}</ul>
            </div>
        );
    }

}