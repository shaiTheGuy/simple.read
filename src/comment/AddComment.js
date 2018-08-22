import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './AddComment.css';  
import { addComment } from '../api/CommentAPI';
import { addReply } from '../api/ReplyAPI';

export default class AddComment extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: null,
      body: null
    };
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(){
    let comment = {};
    let postId = this.props.postId;
    let commentId = this.props.commentId;

    if(commentId)
      comment.commentId = commentId;

    comment.postId = postId;
    comment.username = this.state.username;
    comment.body = this.state.body;

    if(commentId){
      addReply(comment);
    }else{
      addComment(comment);
    }

    this.props.handler();
  }

  render() {
    return (
      <Row>
        <Col className="add-comment-form">
          <Form>
            <FormGroup>
              <Label>Username</Label>
              <Input type="text" name="username" onChange={this.handleChange} placeholder="John Doe" />
            </FormGroup>
            <FormGroup>
              <Label>Comment</Label>
              <Input type="textarea" name="body" onChange={this.handleChange} rows="6" placeholder="Your message to the world" />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}
