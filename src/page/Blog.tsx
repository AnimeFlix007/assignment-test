import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const { postId } = useParams();
  // interface Post {
  //   userId: number;
  //   id: number;
  //   title: string;
  //   body: string;
  // }
  const {post} = useContext(PostContext)
  const naviagte = useNavigate();

  // const [data, setData] = useState<Post | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string>("");
  useEffect(() => {
    // (async function () {
    //   setLoading((prev) => !prev);
    //   try {
    //     const res = await fetch(
    //       `https://jsonplaceholder.typicode.com/posts/${postId}`
    //     );
    //     const data = await res.json();
    //     setData(data);
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   } catch (error: any) {
    //     setError(error.message);
    //   } finally {
    //     setLoading((prev) => !prev);
    //   }
    // })();
    if(!post) {
      return naviagte("/")
    }
  }, [postId, post, naviagte]);



  return (
    <main>
        {/* {postId} */}
      {/* {loading && <p>loading...</p>} */}

      { post && (
        <section>
          <b>{post.id}. {post.title}</b>
          <p>{post.body}</p>
        </section>
      )}
       {/* {!loading && error && <p>Something went wrong - {error}</p>} */}
       <Link to={"/"}>Go Back</Link>
    </main>
  );
}
