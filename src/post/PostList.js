import React, { Component } from 'react';
import { initPosts, getPosts } from '../api/PostAPI';
import { Container } from 'reactstrap';
import { Link } from "react-router-dom";
import './PostList.css';
import PostRow from "./PostRow";


export default class PostList extends Component {
    posts = [];

    constructor(props) {
        super(props);
        this.fetchPostList = this.fetchPostList.bind(this);

        this.state = { isPostsLoaded: false };
    }

    componentDidMount() {
        initPosts();
        initComments();
        initReplies();
        this.fetchPostList();
    }

    fetchPostList(){
        let posts = getPosts();
        if (posts) {
            this.posts = posts;
            this.setState({ isPostsLoaded: true });
        }
    }

    renderPosts() {
        return this.posts.map((post) => {
            return (
                <Link to={{ pathname: "/post/" + post.id }}
                    className="post-list-link"
                    style={{ textDecoration: 'none' }}
                    key={post.id}>
                    <PostRow id={post.id}
                        points={post.points}
                        title={post.title}
                        author={post.author}
                        comments={post.comments} />
                </Link>
            )
        });
    }

    render() {
        if (this.state.isPostsLoaded)
            return (
                <Container className="text-left">
                    {this.renderPosts()}
                </Container>
            );
        else
            return null;
    }
}
