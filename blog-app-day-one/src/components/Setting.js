import React from 'react';
import { withRouter } from 'react-router-dom';
import { userVerifyURL } from '../utils/constant';

class Setting extends React.Component {
  state = {
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  };

  componentDidMount() {
    this.setState({ ...this.state, ...this.props.user });
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    let errors = { ...this.state.errors };
    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      image,
      username,
      bio,
      email,
      password,
    } = this.state;

    let userInfo = {
      user: {
        image,
        username,
        bio,
        email,
        password,
      },
    };

    if (!password) {
      delete userInfo.user.password;
    }
    fetch(userVerifyURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${this.props.user.token}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Can not update the user!');
        }
        return res.json();
      })
      .then(({ user }) => {
        this.setState({
          ...this.state,
          ...user,
        });
        this.props.updateUser(user);
        // this.props.history.push('/');
      })
      .catch((errors) => this.setState({ errors }));
  };

  handleLogout = () => {
    this.props.updateUser(null);
    this.props.history.push('/');
  };

  render() {
    let {
      image,
      username,
      bio,
      email,
      password,
    } = this.state;
    return (
      <div className='sm-wrapper padding'>
        <form
          className='form form-login'
          onSubmit={this.handleSubmit}
        >
          <div className='text-center'>
            <legend className='form-legend'>
              Your Setting
            </legend>
          </div>
          <fieldset className='form-group'>
            <input
              className='form-control'
              type='url'
              name='image'
              onChange={this.handleChange}
              value={image}
              placeholder='URL of profile picture'
            />
            <input
              className='form-control'
              type='text'
              name='username'
              onChange={this.handleChange}
              value={username}
              placeholder='Annie H'
            />
            <textarea
              className='form-control'
              rows='6'
              name='bio'
              onChange={this.handleChange}
              value={bio}
              placeholder='Short bio about you'
            ></textarea>
            <input
              className='form-control'
              type='email'
              name='email'
              onChange={this.handleChange}
              value={email}
              placeholder='Annie H'
            />
            <input
              className='form-control'
              type='password'
              name='password'
              onChange={this.handleChange}
              value={password}
              placeholder='New Password'
            />
            <div className='text-right'>
              <input
                className='btn btn-primary'
                type='submit'
                value='Update Settings'
              />
            </div>
          </fieldset>
        </form>
        <button
          onClick={this.handleLogout}
          className='btn btn-error logout-btn'
        >
          Or click here to logout
        </button>
      </div>
    );
  }
}

export default withRouter(Setting);
