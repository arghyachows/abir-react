import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";


function Home() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleSignOut = () => {
   auth.signOut();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">My Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {user ? (
              <Nav>
                <Nav.Link>{user.displayName}</Nav.Link>
                <Nav.Link>{user.email}</Nav.Link>
                <Nav.Link onClick={handleSignOut}>Sign out</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link onClick={handleSignIn}>Sign in</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="mt-3">
        <Row>
          <Col md={3}>
            <Nav className="flex-column">
              <Nav.Link href="#">Item 1</Nav.Link>
              <Nav.Link href="#">Item 2</Nav.Link>
              <Nav.Link href="#">Item 3</Nav.Link>
            </Nav>
          </Col>
          <Col md={9}>
            <div style={{ height: "400px", overflowY: "scroll" }}>
              {/* Replace this with your scrollable content */}
            </div>
          </Col>
        </Row>
      </Container>

      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Text className="text-white">
            &copy; 2023 My Company. All rights reserved.
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;
