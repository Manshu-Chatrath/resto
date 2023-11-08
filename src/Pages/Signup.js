import React from "react";
import { Field, reduxForm } from "redux-form";
import { signup } from "../action/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  input = (props) => {
    if (this.state.disabled) {
      this.setState({ disabled: false });
    }

    return (
      <>
        <input
          required
          minLength={props.minLength}
          {...props.input}
          placeholder={props.placeholder}
          type={props.type}
          className={props.className}
        />
      </>
    );
  };

  onsubmit = (formValues) => {
    this.props.signup(formValues);
    this.setState({
      disabled: true,
    });
  };

  mistake = () => {
    return (
      <div className="row pt-3">
        <div className="col-12">
          <div className="font-weight-bold text-uppercase text-center text-danger">
            {this.props.signUp.msg
              ? this.props.signUp.msg
              : this.props.signUp.message}
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="window">
          <div
            id="container"
            className="container col-lg-3 col-md-5 col-sm-6 col-9  bg-light">
            {this.props.signUp.msg || this.props.signUp.message
              ? this.mistake()
              : null}
            <div id="row1" className="row">
              <div className="col-12">
                <img
                  id="image"
                  src="https://bowheadpub.com/wp-content/uploads/2019/10/Bowhead-02.png"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <h2 className="heading-inventory">Register yourself</h2>
              </div>
            </div>
            <form action="" onSubmit={this.props.handleSubmit(this.onsubmit)}>
              <div className="form-row">
                <div className="col-12">
                  <Field
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    component={this.input}
                  />
                </div>
              </div>
              <div className="mt-2 form-row">
                <div className="col-12">
                  <Field
                    minLength="5"
                    name="password"
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                    component={this.input}
                  />
                </div>
              </div>
              <div class="mt-2 form-row">
                <div class="col-12">
                  <Field
                    minLength="5"
                    className="form-control"
                    name="confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                    component={this.input}
                  />
                </div>
              </div>
              <button
                disabled={this.state.disabled}
                id="signup"
                className="bg-danger mt-2 mb-2">
                Sign Up
              </button>
            </form>

            <div id="links" className="row pb-4">
              <div id="columns" className="col-12">
                <Link to={`/login`}>Already have account?</Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateProps = (props) => {
  return { signUp: props.Signup };
};
export default connect(mapStateProps, { signup })(
  reduxForm({ form: "supervisorCreate" })(Signup)
);
