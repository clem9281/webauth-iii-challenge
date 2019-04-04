import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";

import withAuth from "../auth/withAuth";
class Users extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    // try {
    //   const users = await axios.get("http://localhost:6500/api/users");
    //   this.setState({ users: users.data });
    // } catch (error) {
    //   console.error("GET ERROR", error);
    // }
    axios
      .get("http://localhost:6500/api/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.error("GET USERS ERROR", err));
  }
  render() {
    return (
      <ListGroup className="mt-2">
        <h2 className="text-center">Users</h2>
        {this.state.users.map(user => (
          <ListGroupItem key={user.username}>{user.username}</ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
export default withAuth(Users);
// const Users = props => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     (async function getData() {
//       try {
//         const users = await axios.get("http://localhost:6500/api/users");
//         setUsers(users.data);
//       } catch (error) {
//         console.error("GET ERROR", error);
//       }
//     })();
//   }, []);
//   return (
//     <ListGroup className="mt-2">
//       <h2 className="text-center">Users</h2>
//       {users.map(user => (
//         <ListGroupItem key={user.username}>{user.username}</ListGroupItem>
//       ))}
//     </ListGroup>
//   );
// };

// export default withAuth(Users);
