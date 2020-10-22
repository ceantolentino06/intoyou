import React from "react";
import { Button, Container, Form } from "react-bootstrap";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.css";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // creating user using firebase methos careateUserWithEmailAndPassword()
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //creating user profile
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <Container>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <Form className='mt-4' onSubmit={this.handleSubmit}>
          <Form.Group controlId='formBasicName-signUp'>
            <Form.Label>Display name</Form.Label>
            <Form.Control
              name='displayName'
              type='text'
              value={displayName}
              onChange={this.handleChange}
              placeholder='Display name'
              required
            />
          </Form.Group>
          <Form.Group controlId='formBasicEmail-signUp'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name='email'
              type='email'
              value={email}
              onChange={this.handleChange}
              placeholder='Enter email'
              required
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword-signUp'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              type='password'
              value={password}
              onChange={this.handleChange}
              placeholder='Password'
              required
            />
          </Form.Group>
          <Form.Group controlId='formBasicConfirmPassword-signUp'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name='confirmPassword'
              type='password'
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder='Confirm password'
              required
            />
          </Form.Group>
          <Button variant='secondary' type='submit' size='lg' block>
            Sign Up
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SignUp;
