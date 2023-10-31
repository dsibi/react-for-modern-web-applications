import Post from "./Post";

function Posts(props: IPosts) {
  return (
    <>
      {props.posts.map((post) => (
        <Post key={post.id} id={post.id} name={post.name} cb={post.cb} />
      ))}
    </>
  );
}

export default Posts;
