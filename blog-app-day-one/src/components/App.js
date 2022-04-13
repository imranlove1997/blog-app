import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import NoMatch from './NoMatch';
import Signup from './Signup';

function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
}

export default App;
