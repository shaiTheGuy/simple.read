import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import ArrowUpward from 'react-icons/lib/md/arrow-upward'
import ArrowDownward from 'react-icons/lib/md/arrow-downward'
import './CommentPoints.css';
import { upvoteComment, downvoteComment } from '../api/CommentAPI';

export default class CommentPoints extends Component {
    constructor(props){
        super(props);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote(){
        upvoteComment(this.props.postId, this.props.commentId);
        this.props.handler();
    }

    handlerDownvote(){
        downvoteComment(this.props.postId, this.props.commentId);
        this.props.handler();
    }

    render() {
        let points = this.props.points;

        return (
            <div>
                <Row>
                    <Col className="text-right">
                        <Button className="comment-body-vote-button" color="link" onClick={this.handleUpvote}>
                            <ArrowUpward/>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-right">
                        <small className="text-muted comment-body-points-text">
                            {points} points
                        </small>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-right">
                        <Button className="comment-body-vote-button" color="link" onClick={this.handleDownvote}>
                            <ArrowDownward/>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
