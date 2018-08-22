import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './CommentBody.css';
import CommentPoints from "./CommentPoints";

export default class CommentBody extends Component {
    constructor(props) {
        super(props);
        this.renderReplyButton = this.renderReplyButton.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    handleVote() {

    }

    //only render reply button for comments and not post body
    renderReplyButton() {
        if (this.props.disableReply)
            return null;
        else
            return (
                <Button className="comment-body-footer-reply-button" onClick={this.props.addReplyClick} outline size="sm" color="secondary">
                    Reply
                </Button>
            );;
    }

    render() {
        let postId = this.props.postId;
        let commendId = this.props.commendId;
        let points = this.props.points;
        let body = this.props.body;

        return (
            <div className="comment-body">
                <Row>
                    <Col className="text-center col-1">
                        <CommentPoints postId={postId}
                            commendId={commendId}
                            points={points}
                            handler={this.handleVote} />
                    </Col>
                    <Col className="col-11 comment-body-text">
                        {body}
                    </Col>
                </Row>
                <Row>
                    <Col className="comment-body-footer">
                        {this.renderReplyButton()}
                    </Col>
                </Row>
            </div>
        )
    }
}
