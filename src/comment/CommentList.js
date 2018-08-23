import React, { Component } from 'react';
import Comment from "./Comment";
import { getCommentsByPost, initComments } from "../api/CommentAPI";


export default class CommentList extends Component {
    comments = [];

    constructor(props) {
        super(props);
        this.fetchCommentList = this.fetchCommentList.bind(this);

        this.state = { isCommentsLoaded: false }
    }

    componentDidMount() {
        this.fetchCommentList();
    }

    fetchCommentList(){
        let postId = this.props.postId;
        let comments = getCommentsByPost(postId);
        if (comments) {
            this.comments = comments;
            this.setState({ isCommentsLoaded: true });
        }
    }

    render() {
        if (this.state.isCommentsLoaded)
            return this.comments.map((comment) => {
                return (
                    <Comment key={comment.id}
                        postId={this.props.postId}
                        id={comment.id}
                        username={comment.username}
                        date={comment.date}
                        points={comment.points}
                        body={comment.body}
                        isPostBody={false}/>
                )
            });
        else
            return null;
    }
}
