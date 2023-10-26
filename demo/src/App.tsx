import Book from "./Book";
import Preloader from "./Preloader";

export interface IApp {
  isLoading: boolean;
}

const App = (props: IApp) => {
  return props.isLoading ? (
    Preloader
  ) : (
    <div>
      <Book name="BlaBlaBla1" subtitle="BlaBlaBla" year={2023}>
        children
      </Book>
      <Book name="BlaBlaBla10" subtitle="BlaBlaBla" year={2023} />
      <Book name="BlaBlaBla100" subtitle="BlaBlaBla" year={2023} />
    </div>
  );
};

export default App;
