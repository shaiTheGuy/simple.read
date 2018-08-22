import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './NewPost.css';
import { addPost } from '../api/PostAPI';

export default class NewPost extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: null,
      title: null,
      body: null
    }
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    let post = {};
    post.author = this.state.username;
    post.title = this.state.title;
    post.body = this.state.body;

    addPost(post);
    this.props.history.push("/");
  }

  render() {
    return (
      <Form className="text-left new-post-form">
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" name="username" onChange={this.handleChange} placeholder="John Doe" />
        </FormGroup>
        <FormGroup>
          <Label>Post Title</Label>
          <Input type="text" name="title" onChange={this.handleChange} placeholder="The title of your post" />
        </FormGroup>
        <FormGroup>
          <Label>Post Message</Label>
          <Input type="textarea" name="body" onChange={this.handleChange} rows="6" placeholder="The message of your post" />
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}
