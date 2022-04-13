import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  localStorageKey,
  userVerifyURL,
} from '../utils/constant';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import NoMatch from './NoMatch';
import Signup from './Signup';
import SinglePost from './SinglePost';
import Setting from './Setting';
import NewPost from './NewPost';
import Profile from './Profile';
import FullPageSpinner from './FullPageSpinner';
import UserProfile from './UserProfile';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
    isVerifying: true,
  };
  componentDidMount() {
    let storageKey = localStorage[localStorageKey];
    if (storageKey) {
      fetch(userVerifyURL, {
        method: 'GET',
        headers: {
          authorization: `Token ${storageKey}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        })
        .then(({ user }) => this.updateUser(user))
        .catch((errors) => console.log(errors));
    } else {
      this.setState({ isVerifying: false });
    }
  }
  updateUser = (user) => {
    if (user) {
      this.setState({
        isLoggedIn: true,
        user,
        isVerifying: false,
      });
      localStorage.setItem(localStorageKey, user.token);
    } else {
      this.setState({
        isLoggedIn: false,
        user,
        isVerifying: false,
      });
      localStorage.removeItem(localStorageKey);
    }
  };
  render() {
    if (this.state.isVerifying) {
      return <FullPageSpinner />;
    }
    return (
      <>
        <Header
          isLoggedIn={this.state.isLoggedIn}
          user={this.state.user}
        />
        {this.state.isLoggedIn ? (
          <AuthenticatedApp
            updateUser={this.updateUser}
            user={this.state.user}
          />
        ) : (
          <UnauthenticatedApp
            updateUser={this.updateUser}
            user={this.state.user}
          />
        )}
      </>
    );
  }
}

function AuthenticatedApp(props) {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/new-post'>
        <NewPost user={props.user} />
      </Route>
      <Route path='/settings'>
        <Setting
          user={props.user}
          updateUser={props.updateUser}
        />
      </Route>
      <Route path='/profile' exact>
        <Profile user={props.user} />
      </Route>
      <Route
        path='/profile/:username'
        component={UserProfile}
      />
      <Route path='/article/:slug'>
        <SinglePost user={props.user} />
      </Route>
      <Route path='*'>
        <NoMatch />
      </Route>
    </Switch>
  );
}
function UnauthenticatedApp(props) {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/login'>
        <Login updateUser={props.updateUser} />
      </Route>
      <Route path='/signup'>
        <Signup updateUser={props.updateUser} />
      </Route>
      <Route path='/article/:slug'>
        <SinglePost user={props.user} />
      </Route>
      <Route
        path='/profile/:username'
        component={UserProfile}
      />
      <Route path='*'>
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
