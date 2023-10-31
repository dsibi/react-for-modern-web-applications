import { ChangeEvent, Component, ReactNode } from "react";
import "./Form.css";

class Form extends Component<IFormProps, IFormStateExtended> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      message: "blablabla",
      select: "",
      subscription: false,
      gender: "",
    };
  }

  handleChange = (
    event:
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    this.setState({
      [event.target.name]: event.target.value,
    } as unknown as Pick<IFormState, keyof IFormState>);
  };

  handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.checked,
    } as unknown as Pick<IFormState, keyof IFormState>);
  };

  validateName = () => {
    if (this.state.firstName.length < 5) {
      alert("Name not valid");
    }
  };

  validateEmail = () => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.email
      )
    ) {
      alert("You have entered an invalid email address!");
      return false;
    }
  };

  render(): ReactNode {
    const { firstName, email, message, select, subscription, gender } =
      this.state;
    return (
      <div className="App">
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
        <textarea
          name="message"
          id="msg"
          value={message}
          onChange={this.handleChange}
        ></textarea>
        <select
          name="select"
          id="sel"
          value={select}
          onChange={this.handleChange}
        >
          <option value="" disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={subscription}
            onChange={this.handleCheckboxChange}
          />
          Subscription
        </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={this.handleChange}
          checked={gender == "male"}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.handleChange}
          checked={gender == "female"}
        />{" "}
        Female
      </div>
    );
  }
}

export default Form;
