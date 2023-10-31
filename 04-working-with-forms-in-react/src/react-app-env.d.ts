/// <reference types="react-scripts" />

interface IFormProps {
  // firstName: string;
}

interface IFormState {
  email: string;
  subscription?: boolean;
}

interface IFormStateExtended extends IFormState {
  firstName: string;
  message: string;
  select: string;
  gender: "male" | "female" | "";
}

interface IFormWithRefState extends IFormState {
  card: string;
}

interface MyHTMLElement<Type extends string> extends Omit<HTMLElement, "type"> {
  type: Type;
}

interface MyInputHTMLElement<Type extends string = "input">
  extends MyHTMLElement<Type> {
  foo: number;
}

interface MyCheckboxHTMLElement extends MyInputHTMLElement<"checkbox"> {
  bar: string;
}

const doSomething = (element: MyInputHTMLElement | MyCheckboxHTMLElement) => {
  if (element.type === "checkbox") {
    console.log(element.bar);
  } else {
    console.log(element.foo);
  }
};
