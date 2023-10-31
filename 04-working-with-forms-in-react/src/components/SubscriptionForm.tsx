import { ChangeEvent, Component, ReactNode } from "react";
import "./Form.css";

class Form extends Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      email: "",
      subscription: false,
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

  handleSubmit = () => {
    if (!this.state.email) {
      alert("You have not entered email address!");
      return;
    } else if (!this.state.subscription) {
      alert("You need to accept terms and conds!");
      return;
    } else if (this.state.email && this.state.subscription) {
      this.setState({ email: "", subscription: false });
      alert("Thx!");
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
    const { email, subscription } = this.state;
    return (
      <div className="App">
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={subscription}
            onChange={this.handleCheckboxChange}
          />
          I agree with evrth
        </label>
        <br />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}

export default Form;
