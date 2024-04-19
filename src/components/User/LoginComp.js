import React from "react";
import "../style/Login.css";
import logo from "../../Images/logo.png";
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RegComp from "./RegComp";
import axios from "axios";

const Login = () => {
  const [Regshow, setRegShow] = useState(false);
  const RegClose = () => setRegShow(false);
  const RegShow = () => setRegShow(true);

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const sendData = { username, email, password };
  const InsertData = async () => {
    const data = await axios.post(
      "http://localhost:8000/api/user/login",
      sendData
    );
    console.log(data);
  };
  return (
    <body>
      <MDBCard>
        <MDBCardBody className="d-flex flex-column">
          <div className="d-flex flex-row mt-2">
            <span className="h1 fw-bold mb-0">
              <img src={logo} height={80} width={80} alt="80x70"></img>&nbsp;
            </span>
            <font color="">
              <h1>
                <b>Job Portal</b>
              </h1>
            </font>
            &nbsp;&nbsp;<h4>Quick Jobs </h4>
          </div>
          <center>
            <h5
              className="fw-normal my-4 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Sign into your account
            </h5>
          </center>
          <MDBInput
            wrapperClass="mb-4"
            placeholder="UserName"
            type="text"
            size="lg"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Email address"
            id="login_email"
            type="email"
            size="lg"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Password"
            id="login_pswd"
            type="password"
            size="lg"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <MDBBtn
            className="mb-4 px-5"
            color="dark"
            size="lg"
            onClick={() => InsertData()}
          >
            Login
          </MDBBtn>
          <center>
            <a className="small text-muted" href="#!">
              Forgot password?
            </a>
            <br />
            <br />
            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
              Don't have an account? &nbsp;&nbsp;
              <Button variant="primary" onClick={RegShow}>
                Register here
              </Button>
            </p>
            <Modal show={Regshow} onHide={RegClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <RegComp />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={RegClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={RegClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <a href="#!" className="small text-muted me-1">
              Terms of use.
            </a>
            <a href="#!" className="small text-muted">
              Privacy policy
            </a>
          </center>
        </MDBCardBody>
      </MDBCard>
    </body>
  );
};

export default Login;
