import { Link } from "react-router-dom";
import style from "./Posts.module.scss";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination";

const Posts = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const limit = 20;

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam) {
      setPage(Number(pageParam));
    } else {
      setSearchParams({ page: 1 });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
      .then((response) => {
        const totalCount = response.headers.get("X-Total-Count");
        setTotalPages(Math.ceil(totalCount / limit));
        return response.json();
      })
      .then((json) => setPosts(json))
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={style.postContainer}>
      <ul className={style.postList}>
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={`/postdetail/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};

export default Posts;
