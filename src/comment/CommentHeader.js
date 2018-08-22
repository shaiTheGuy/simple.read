import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import EditIcon from 'react-icons/lib/md/edit';
import DeleteIcon from 'react-icons/lib/md/delete'
import './CommentHeader.css';

export default class CommentHeader extends Component {
    render() {
        let username = this.props.username;
        let date = this.props.date;

        return (
            <Row className="comment-header">
                <Col className="col-auto comment-header-col">
                    <b>{username}</b>
                </Col>
                <Col className="col-auto comment-header-col">
                    <small className="text-muted comment-header-date-text">
                        {date}
                    </small>
                </Col>
                <Col className="text-right">
                    <Button color="link" className="comment-header-icon">
                        <EditIcon/>
                    </Button>
                    <Button color="link" className="comment-header-icon">
                        <DeleteIcon/>
                    </Button>
                </Col>
            </Row>
        )
    }
}
