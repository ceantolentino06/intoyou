import React from "react";
import { Button, Container, Form } from "react-bootstrap";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <Form className='mt-4' onSubmit={this.handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Enter email'
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
              placeholder='Password'
            />
          </Form.Group>
          <Button variant='secondary' type='submit' size='lg' block>
            Sign In
          </Button>
          <p className='text-center mt-3'>Or</p>
          <Button variant='info' size='lg' onClick={signInWithGoogle} block>
            Sign In with Google
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SignIn;
