import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.paramslogin);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gits,
      hireable
    } = this.props.user;

    const { loading } = this.props;
    return (
      <div>
        <img src={avatar_url} alt='' />
        {avatar_url}
      </div>
    );
  }
}

export default User;
