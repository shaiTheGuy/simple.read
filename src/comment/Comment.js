import React, { Component } from 'react';
import { Row, Col, Collapse, Modal, ModalBody } from 'reactstrap';
import './Comment.css';
import CommentBody from "./CommentBody";
import CommentHeader from "./CommentHeader";
import ReplyList from "../reply/ReplyList";
import AddComment from './AddComment';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.handleAddReply = this.handleAddReply.bind(this)
        this.renderAddReply = this.renderAddReply.bind(this);

        this.state = { toggleReplyView: false, isReplyAdded: false };
    }

    componentDidUpdate() {
        if (this.state.isReplyAdded) {
            this.setState({ isReplyAdded: false });
        }
    }

    renderAddReply() {
        this.setState({ toggleReplyView: !this.state.toggleReplyView });
    }

    handleAddReply() {
        this.setState({ toggleReplyView: !this.state.toggleReplyView, isReplyAdded: true });
    }

    render() {
        let postId = this.props.postId;
        let id = this.props.id;
        let username = this.props.username;
        let date = this.props.date;
        let body = this.props.body;
        let points = this.props.points;
        let isPostBody = this.props.isPostBody;

        return (
            <Row className="comment">
                <Col>
                    <CommentHeader username={username} date={date} />
                    <CommentBody postId={postId}
                        commentId={id}
                        body={body}
                        points={points}
                        disableReply={isPostBody}
                        addReplyClick={this.renderAddReply} />
                    <ReplyList className="reply-list" commentId={id} postId={postId} isReplyAdded={this.state.isReplyAdded} />
                    <Collapse isOpen={this.state.toggleReplyView}>
                        <AddComment postId={postId} commentId={id} handler={this.handleAddReply} />
                    </Collapse>
                </Col>
            </Row>
        )
    }
}
