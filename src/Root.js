import React, { Component } from 'react';
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import './Root.css'
import Post from "./post/Post";
import PostList from "./post/PostList";
import NewPost from "./post/NewPost";

export default class Root extends Component {
    render() {
        return (
            <div>
                <header className="App-header text-left">
                    <h5 className="logo-text">simple.read</h5>
                    <Nav className="root-nav">
                        <NavItem className="root-nav-item">
                            <Link to="/">Main</Link>
                        </NavItem>
                        <NavItem className="root-nav-item">
                            <Link to="/post/new">New Post</Link>
                        </NavItem>
                    </Nav>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" render={(props) => (<PostList {...props} />)} />
                        <Route path="/post/new" render={(props) => (<NewPost {...props} />)} />
                        <Route path="/post/:id" render={(props) => (<Post {...props} />)} />
                        <Route render={(props) => (<PostList {...props} />)} />
                    </Switch>
                </main>
            </div>
        )
    }
}