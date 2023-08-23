import { createContext, useState } from "react";
import { Post } from "../App";

interface ContextState {
  post: Post | null;
  setPostData: (post: Post | null) => void;
}

interface valueType {
  post: Post | null;
  setPostData: (post: Post| null) => void;
}

export const PostContext = createContext<ContextState>({
  post: null,
  setPostData: () => {}
});

const PostContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [post, setPost] = useState<Post | null>(null);
  function setPostData (post: Post| null) {
    setPost(post)
  }
  const value: valueType = {
    post,
    setPostData,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
