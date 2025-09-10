import style from "./PostDetail.module.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      {post && (
        <div className={style.postDetail}>
          <h2>
            {post.id}
            {". "}
            {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
};

export default PostDetail;
