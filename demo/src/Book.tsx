interface IBook {
  name: string;
  subtitle: string;
  year: number;
  children?: string;
}

const Book = (props: IBook) => {
  // if (props.name == "BlaBlaBla10") {
  //   return null;
  // }
  return props.name == "BlaBlaBla10" ? null : (
    <div id={props.name}>
      <h2>{props.name}</h2>
      <p>{props.subtitle}</p>
      <p>{props.year}</p>
      <p>{props.children}</p>
      {/* <br /> */}
    </div>
  );
};

export default Book;
