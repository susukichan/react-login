//short cut:rce tab

import React, { Component } from "react";
import FormUserDetail from "./FormUserDetail";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };
  //proceed to the next step
  nextStep = () => {
    //take the step out of the state with destructuring, pulling it out putting it into a variable
    const { step } = this.state;
    this.setState({
      //whatever we want to change in the state, we will put here as the key
      step: step + 1
    });
  };

  //proceed to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //handle fields change because each input will have its own state
  //take in input, with event param,
  handleChange = input => e => {
    //take whatever the input is: [input], and we want to set it to whatever the value is,
    //we get that using the event e.target.value.
    //i.e.whatever is entered in every field and that will handle all of the fields
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    switch (step) {
      case 1:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>FormPersonalDeatils</h1>;
      case 3:
        return <h1>confirm</h1>;

      case 4:
        return <h1>success</h1>;
    }
  }
}

export default UserForm;
