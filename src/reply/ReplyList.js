import React, { Component } from 'react';
import Reply from "./Reply";
import { getRepliesByComment, initReplies } from "../api/ReplyAPI";

export default class ReplyList extends Component {
    replies = [];

    constructor(props) {
        super(props);
        this.fetchReplyList = this.fetchReplyList.bind(this);

        this.state = { isRepliesLoaded: false };
    }

    componentDidMount() {
        this.fetchReplyList();
    }

    componentDidUpdate(){
        if(this.props.isReplyAdded)
            this.fetchReplyList();
    }

    fetchReplyList(){
        let postId = this.props.postId;
        let commentId = this.props.commentId;

        let replies = getRepliesByComment(postId, commentId);
        if (replies) {
            this.replies = replies;
            this.setState({ isRepliesLoaded: true })
        }
    }

    render() {
        if (this.state.isRepliesLoaded)
            return this.replies.map((reply) => {
                return (
                    <Reply key={reply.id}
                        id={reply.id}
                        username={reply.username}
                        date={reply.date}
                        body={reply.body} />
                )
            });
        else
            return null;
    }
}
