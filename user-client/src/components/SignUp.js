import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SignUp = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
      </FormGroup>
      <FormGroup>
        <Label for="username">Department</Label>
        <Input
          type="text"
          name="department"
          id="department"
          placeholder="Department"
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

export default SignUp;
