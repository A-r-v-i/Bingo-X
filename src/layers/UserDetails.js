import React, { Component } from "react";
//import {connect} from 'react-redux';

class UserDetails extends Component {
  render() {
    const { userdetails } = this.props;
    return <div>{userdetails.username}</div>;
  }
}

export default UserDetails;
