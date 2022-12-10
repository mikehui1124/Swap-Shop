import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import auth from "../utils/auth";

export default class Nav extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    console.log("Clicked menu item:" + name);
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          as={NavLink}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to="/Dashboard"
          name="Dashboard"
          active={activeItem === "Dashboard"}
          onClick={this.handleItemClick}
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to="/SignUp"
          name="SignUp"
          active={activeItem === "SignUp"}
          onClick={this.handleItemClick}
        >
          SignUp
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to="/Login"
          name="Login"
          active={activeItem === "Login"}
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to="/InstantMessenger"
          name="Login"
          active={activeItem === "InstantMessenger"}
          onClick={this.handleItemClick}
        >
          Instant Messenger
        </Menu.Item>
      </Menu>
    );
  }
}
