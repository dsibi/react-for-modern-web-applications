import Post from "./Post";

function Posts(props: IPosts) {
  return (
    <>
      {props.posts.map((post) => (
        <Post key={post.name} id={post.id} name={post.name} cb={post.cb} />
      ))}
    </>
  );
}

export default Posts;
