/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import "./App.css";
import { PostContext } from "./context/PostContext";
import { useNavigate } from "react-router-dom";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { setPostData } = useContext(PostContext);
  const naviagte = useNavigate();

  function navigateHandler(post: Post) {
    setPostData(post);
    naviagte("/post-detail");
  }

  useEffect(() => {
    (async function () {
      setLoading((prev) => !prev);
      setPostData(null)
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!res.ok) {
          return setError("Internal Server Error");
        }
        const data = await res.json();
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading((prev) => !prev);
      }
    })();
  }, [setPostData]);

  return (
    <main>
      <h1>Posts</h1>
      {loading && <p>loading...</p>}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!loading &&
          !error &&
          data &&
          data?.map((ele) => {
            return (
              <div
                key={ele.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid white",
                  padding: "2rem",
                  width: "200px",
                  height: "100px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "1rem"
                }}
              >
                {ele.id}.{" "}
                {ele.title.length > 40
                  ? ele.title.substring(0, 40) + "..."
                  : ele.title}
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => navigateHandler(ele)}
                >
                  Go To Detail
                </p>
              </div>
            );
          })}
        {!loading && error && <p>Something went wrong - {error}</p>}
      </section>
    </main>
  );
}

export default App;
