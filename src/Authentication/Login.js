import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./Firebase";
import { AuthContext } from "./Auth.js";
import { Navbar } from 'react-bootstrap';
import '../Styles/login.css'
import { Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="loginContainer">
    <Navbar className="Appname">Ibento</Navbar>
    <Card className="loginCard" style={{ margin: "25px" }}>
        <Card.Body>

          <h2 className="text-center mb-4 loginTitle">Log In</h2>

          <form onSubmit={handleLogin}>
            <Form.Group id="email">
              <Form.Label className="emailPassword">Email</Form.Label>
              <Form.Control name="email" placeholder="Email address" type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="emailPassword">Password</Form.Label>
              <Form.Control name="password" placeholder="Password" type="password" required />
            </Form.Group>
            <br />
            <Button className="w-100" type="submit">
              Log In
            </Button>
          </form>
          <div className="w-100 text-center mt-3">
            <br />
            <br />
            <Link to="/signup">New to Ibento? Create An Account</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default withRouter(Login);