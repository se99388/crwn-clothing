import { Component } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { signUpStart } from "../../redux/user/user.actions";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils.js";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }
    signUpStart({ displayName, email, password });
    // try {
    // //create a new auth user in the firebase
    // const { user } = await auth.createUserWithEmailAndPassword(
    //   email,
    //   password
    // );

    // //add the new user to the 'users' collection (if it is not exist yet)
    // await createUserProfileDocument(user, { displayName });
    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    // } catch (error) {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   if (errorCode === "auth/weak-password") {
    //     alert("The password is too weak.");
    //   } else {
    //     alert(errorMessage);
    //   }
    //   console.log(error);
    // }

    // console.log(this.state);
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I DO NOT HAVE AN ACOUNT</h2>
        <span>sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="NAME"
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="EMAIL"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="PASSWORD"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="CONFIRM PASSWORD"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
