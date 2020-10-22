import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-sign-up.styles.css";

const SignInSignUpPage = () => (
  <Container>
    <Row>
      <Col md={12} lg={6}>
        <SignIn />
      </Col>
      <Col md={12} lg={6} className='sign-up'>
        <SignUp />
      </Col>
    </Row>
  </Container>
);

export default SignInSignUpPage;
