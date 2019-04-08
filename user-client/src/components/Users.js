import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";
import withAuth from "../auth/withAuth";

const Users = props => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async function getData() {
      try {
        const users = await axios.get("http://localhost:6500/api/users");
        setUsers(users.data);
      } catch (error) {
        console.error("GET ERROR", error);
      }
    })();
  }, []);
  return (
    <ListGroup className="mt-2">
      <h2 className="text-center">
        {users.length > 0 ? `Users from ${users[0].department}` : "Users"}
      </h2>
      {users.map(user => (
        <ListGroupItem key={user.username}>{user.username}</ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default withAuth(Users);
