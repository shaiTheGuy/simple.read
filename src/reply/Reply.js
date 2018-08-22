import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './Reply.css';

export default class Reply extends Component {
    render() {
        let username = this.props.username;
        let date = this.props.date;
        let body = this.props.body;

        return (
            <Row className="reply">
                <Col>
                    <Row>
                        <Col className="col-auto reply-header-username-text">
                            <b>{username}</b>
                        </Col>
                        <Col className="col-auto reply-header-date-text">
                            <small className="text-muted">{date}</small>
                        </Col>
                    </Row>
                    <Row className="reply-body">
                        <Col className="reply-body-col">
                            {body}
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
