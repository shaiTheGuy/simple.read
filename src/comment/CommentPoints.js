import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import ArrowUpward from 'react-icons/lib/md/arrow-upward'
import ArrowDownward from 'react-icons/lib/md/arrow-downward'
import './CommentPoints.css';

export default class CommentPoints extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let points = this.props.points;

        return (
            <div>
                <Row>
                    <Col className="text-right">
                        <Button className="comment-body-vote-button" color="link">
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
                        <Button className="comment-body-vote-button" color="link">
                            <ArrowDownward/>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
