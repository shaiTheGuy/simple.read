import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Collapse } from 'reactstrap';
import Add from 'react-icons/lib/md/add';
import './Post.css';
import PostHeader from "./PostHeader";
import CommentList from "../comment/CommentList";
import AddComment from '../comment/AddComment';
import { getPostById } from '../api/PostAPI';

export default class Post extends Component {
    post = null;

    constructor(props) {
        super(props);
        this.state = { isPostLoaded: false, toggleCommentView: false };
        this.renderAddComment = this.renderAddComment.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.fetchPost = this.fetchPost.bind(this);
    }

    componentDidMount() {
        this.fetchPost();
    }

    componentDidUpdate() {
        if (!this.state.isPostLoaded)
            this.fetchPost();
    }

    handleAddComment() {
        this.setState({
            toggleCommentView: false,
            isPostLoaded: false
        });
    }

    renderAddComment() {
        this.setState({ toggleCommentView: !this.state.toggleCommentView });
    }

    fetchPost() {
        let id = this.props.match.params.id;
        let post = getPostById(id);
        if (post) {
            this.post = post;
            this.setState({ isPostLoaded: true });
        }
    }

    render() {
        if (this.state.isPostLoaded)
            return (
                <Container className="text-left">
                    <Button color="link" className="add-comment-button" onClick={this.renderAddComment} style={{ textDecoration: 'none' }}>
                        <Add /> New comment
                    </Button>
                    <Collapse isOpen={this.state.toggleCommentView}>
                        <AddComment postId={this.post.id} commentId={null} handler={this.handleAddComment} />
                    </Collapse>
                    <PostHeader author={this.post.author}
                        title={this.post.title}
                        body={this.post.body}
                        points={this.post.points} />
                    <CommentList postId={this.post.id} />
                </Container>
            )
        else return null;
    }
}
