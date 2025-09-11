import style from "./PostDetail.module.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
        (response) => response.json()
      ),
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(
        (response) => response.json()
      ),
    ]).then(([postData, commentsData]) => {
      setPost({ ...postData, comments: commentsData });
      setLoading(false);
    });
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
          <div className={style.comments}>
            {post.comments &&
              [...post.comments].reverse().map((comment) => (
                <div key={comment.id} className={style.commentItem}>
                  <div className={style.commentName}>{comment.name}</div>
                  <div className={style.commentEmail}>{comment.email}</div>
                  <div className={style.commentBody}>{comment.body}</div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
