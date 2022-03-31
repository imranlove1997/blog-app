import { Link } from "react-router-dom";

export default function Login(props) {
    return (
        <div className="sm-wrapper padding">
          <form className="form form-login" action="">
            <div className="text-center">
              <legend className="form-legend">Sign In</legend>
              <Link to="/login" className="form-switch">
                Need an account?
              </Link>
            </div>
            <fieldset className="form-group">
              <input className="form-control" type="email" placeholder="Email" />
              <input
                className="form-control"
                type="password"
                placeholder="Password"
              />
              <div className="text-right">
                <input className="btn btn-primary" type="submit" value="Sign in" />
              </div>
            </fieldset>
          </form>
        </div>
      );
}