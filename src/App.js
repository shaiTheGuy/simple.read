import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Root from "./Root";
import { initPosts } from './api/PostAPI';
import { initComments } from './api/CommentAPI';
import { initReplies } from './api/ReplyAPI';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Root/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
