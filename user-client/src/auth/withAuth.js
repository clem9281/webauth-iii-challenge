import React from "react";
import axios from "axios";

axios.interceptors.request.use(function(config) {
  config.headers.authorization = localStorage.getItem("token");
  return config;
});

export default function(Component) {
  const token = localStorage.getItem("token");
  console.log(token);
  return class Authenticated extends React.Component {
    render() {
      return token ? <Component {...this.props} /> : <h2>Please Log In</h2>;
    }
  };
}
