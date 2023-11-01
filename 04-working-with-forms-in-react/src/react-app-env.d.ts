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

type ChangeEventTypes =
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>;
