import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './PostRow.css';

export default class PostRow extends Component {
    render() {
        let points = this.props.points;
        let title = this.props.title;
        let author = this.props.author;
        let comments = this.props.comments;

        return (
            <Row className="post-list-row">
                <Col className="col-1 text-muted text-center post-list-stats-col">
                    <Row>
                        <Col className="text-center">
                            <small>
                                {points}
                            </small>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <small>
                                Points
                            </small>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-9 post-list-title-col">
                    {title}
                </Col>
                <Col className="col-1 post-list-stats-col">
                    By <i>{author}</i>
                </Col>
                <Col className="col-1 post-list-stats-col">
                    {comments} Comments
                </Col>
            </Row>
        )
    }
}
