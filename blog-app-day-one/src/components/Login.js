import React from 'react';
import { Link } from 'react-router-dom';
import { loginURL } from '../utils/constant';
import validate from '../utils/validate';
import { withRouter } from 'react-router';

class Login extends React.Component {
  state = {
    email: 'actest45@gmail.com',
    password: 'actest45',
    errors: {
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
    const { email, password } = this.state;
    fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { email, password } }),
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
        this.props.history.push('/');
      })
      .catch((_error) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            errors: {
              ...prevState.errors,
              email: 'Email or Password is incorrect!',
            },
          };
        });
      });
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="sm-wrapper padding" style={{marginTop: '5rem'}}>
        <form className="form form-login" onSubmit={this.handleSubmit}>
          <div className="text-center">
            <legend className="form-legend">Sign In</legend>
            <Link to="/login" className="form-switch">
              Need an account?
            </Link>
          </div>
          <fieldset className="form-group">
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={email}
            />
            <span className="error">{errors.email}</span>
            <input
              name="password"
              className="form-control"
              type="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <span className="error">{errors.password}</span>
            <div className="text-right">
              <input
                className="btn btn-primary"
                type="submit"
                disabled={errors.email || errors.password}
                value="Sign in"
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
