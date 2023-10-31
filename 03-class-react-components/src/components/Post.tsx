function Post(props: IPost) {
  const { name, id, cb } = props;
  return (
    <h2>
      {name}
      <button onClick={() => cb(id)} id={props.name}>
        Delete
      </button>
    </h2>
  );
}

export default Post;
