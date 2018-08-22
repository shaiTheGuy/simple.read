import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './PostHeader.css';
import Comment from "../comment/Comment";

export default class PostHeader extends Component {
    render() {
        let title = this.props.title;
        let author = this.props.author;
        let date = this.props.date;
        let points = this.props.points;
        let body = this.props.body;

        return (
            <div className="post-header-div">
                <Row>
                    <Col>
                        <h4>
                            {title}
                        </h4>
                    </Col>
                </Row>
                <Comment username={author}
                                 date={date}
                                 points={points}
                                 body={body}
                                 isPostBody={true}/>
            </div>
        )
    }
}
