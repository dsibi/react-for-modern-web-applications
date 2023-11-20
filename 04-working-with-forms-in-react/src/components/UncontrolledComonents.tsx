import { Component, ReactNode, createRef } from "react";
import "./Form.css";

class Form extends Component<IFormProps, IFormWithRefState> {
  cardRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  constructor(props: IFormProps) {
    super(props);
    this.cardRef = createRef();
    this.emailRef = createRef();
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.cardRef.current!.value.length < 16) {
      alert("Invalid card number!");
      return;
    }
    this.cardRef.current!.value = "";
    this.emailRef.current!.value = "";
  };

  render(): ReactNode {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="card" name="card" placeholder="card" ref={this.cardRef} />
        <input
          type="email"
          name="email"
          placeholder="email"
          ref={this.emailRef}
        />
        <button>Send</button>
      </form>
    );
  }
}

export default Form;
