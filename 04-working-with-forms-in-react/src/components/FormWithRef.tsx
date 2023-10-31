import { ChangeEvent, Component, ReactNode, createRef } from "react";
import "./Form.css";

class Form extends Component<IFormProps, IFormWithRefState> {
  cardRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      email: "",
      card: "",
    };
    this.cardRef = createRef();
    this.emailRef = createRef();
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState(
      () =>
        ({
          [event.target.name]: event.target.value,
        } as unknown as Pick<IFormWithRefState, keyof IFormWithRefState>),
      () => {
        if (this.state.card.length == 16) {
          this.emailRef.current?.focus();
        }
      }
    );
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

  componentDidMount(): void {
    this.cardRef.current?.focus();
  }

  render(): ReactNode {
    const { email, card } = this.state;
    return (
      <div className="App">
        <input
          type="card"
          name="card"
          placeholder="card"
          value={card}
          onChange={this.handleChange}
          ref={this.cardRef}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
          ref={this.emailRef}
        />
      </div>
    );
  }
}

export default Form;
