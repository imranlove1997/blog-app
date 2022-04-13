import React from 'react';
import { Link } from 'react-router-dom';
import { signupURL } from '../utils/constant';
import validate from '../utils/validate';
import { withRouter } from 'react-router';

class Signup extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    errors: {
      username: '',
      email: '',
      password: '',
    },
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    let errors = { ...this.state.errors };
    validate(errors, name, value);
    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    fetch(signupURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { username, email, password } }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        }
        return res.json();
      })
      .then(({ user }) => {
        this.props.updateUser(user);
        this.setState({ username: '', password: '', email: '' });
        this.props.history.push('/');
      })
      .catch((errors) => this.setState({ errors }));
  };

  render() {
    let { errors, username, email, password } = this.state;
    return (
      <div className="sm-wrapper padding" style={{marginTop: '5rem'}}>
        <form className="form form-login" onSubmit={this.handleSubmit}>
          <div className="text-center">
            <legend className="form-legend">Signup</legend>
            <Link to="/login" className="form-switch">
              Have an account?
            </Link>
          </div>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
              value={username}
            />
            <span className="error">{errors.username}</span>
            <input
              name="email"
              className="form-control"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={email}
            />
            <span className="error">{errors.email}</span>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={password}
            />
            <span className="error">{errors.password}</span>
            <div className="text-right">
              <input
                className="btn btn-primary"
                type="submit"
                disabled={errors.email || errors.password || errors.username}
                value="Sign up"
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
