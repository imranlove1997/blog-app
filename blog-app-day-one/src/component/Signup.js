import { Link } from "react-router-dom";

export default function Signup(props) {
    return (
        <div className="sm-wrapper padding">
          <form className="form form-login" action="">
            <div className="text-center">
              <legend className="form-legend">Signup</legend>
              <Link to="/login" className="form-switch">
                Have an account?
              </Link>
            </div>
            <fieldset className="form-group">
              <input className="form-control" type="text" placeholder="Username" />
              <input className="form-control" type="email" placeholder="Email" />
              <input
                className="form-control"
                type="password"
                placeholder="Password"
              />
              <div className="text-right">
                <input className="btn btn-primary" type="submit" value="Sign up" />
              </div>
            </fieldset>
          </form>
        </div>
      );
}