import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

import "./App.css";
import { Container } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Container fluid className='app-body'>
        {/*------------   HEADER   ---------------*/}
        <Container>
          <Header currentUser={this.state.currentUser} />
        </Container>

        {/*------------   HOMEPAGE   ---------------*/}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
