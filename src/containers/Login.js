import React, {useState} from "react";
//import "./Login.css";

export default function Login({handleChange}){
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");*/

  const [errorMessages, setErrorMessages] = useState({});
  //const [isSubmitted, setIsSubmitted] = useState(false);

  const isSubmitted = false;

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = (event) => {
    event.preventDefault();

    var {uname, pass} = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);
    if(userData){
      if(userData.password !== pass.value){
        setErrorMessages({name: "pass", message: errors.pass});
      }else{
        handleChange();
      }
    }else{
      setErrorMessages({name: "uname", message: errors.uname});
    }
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  /*function validateForm(){
    return email.length>0 && password.length>0;
  }*/

  return(
    <div className="Login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>Logged In</div> : renderForm}
      </div>
    </div>
    /*<div className="Login">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control autoFocus type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
        </Row>

        <Button block type="submit" disabled={!validateForm()}>Login</Button>
      </Form>
    </div>*/
  );
}