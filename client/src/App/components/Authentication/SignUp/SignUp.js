import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./../../../../assets/scss/style.scss";
import Aux from "../../../../hoc/_Aux";
import Breadcrumb from "../../../layout/AdminLayout/Breadcrumb";
import { connect } from "react-redux";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    // props.signUp(formData);
    setError(true);
  };
  return (
    <Aux>
      <Breadcrumb />
      <div className="auth-wrapper aut-bg-img">
        <div className="auth-content">
          {/* <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div> */}
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-user-plus auth-icon" />
              </div>
              <h3 className="mb-4">Sign up</h3>
              <form onClick={submit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={handleChange}
                    name="username"
                    value={formData.username}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                  />
                </div>
                <div className="input-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="btn btn-primary shadow-2 mb-4">
                  Sign up
                </button>
              </form>
              <p className="mb-0 text-muted">
                Allready have an account? <NavLink to="/login">Login</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.authentication.currentUser,
  success: state.authentication.success,
  loading: state.authentication.loading,
  failure: state.authentication.failure,
});
const mapDispatchToProps = (dispatch) => ({
  // detailsNoeud: (id) => dispatch(getDetailsOfNoeuds(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
