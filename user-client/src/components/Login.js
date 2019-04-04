import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = props => {
  return (
    <Form>
      <h2 className="mt-3 text-center">Login</h2>
      <FormGroup>
        <Label for="username">Email</Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </FormGroup>
      <Button className="d-block mx-auto" color="primary">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
