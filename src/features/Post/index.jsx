import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import queryString from "query-string";
import PostFilterForm from "./components/PostFilterForm";

function Post() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 100,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });

  useEffect(() => {
    let fetchPostList = async () => {
      try {
        const paramString = queryString.stringify(filters);

        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;

        const response = await fetch(requestURL);

        const responseJSON = await response.json();

        console.log(response);
        console.log(responseJSON);

        const { data, pagination } = responseJSON;

        setPagination(pagination);
        setPostList(data);
      } catch (error) {
        console.log("Can not fetch, something wrong: ", error.message);
      }
    };

    fetchPostList();
  }, [filters]);

  let handlePageChange = (newPage) => {
    const newFilters = { ...filters, _page: newPage };
    setFilters(newFilters);
  };

  let handleFilterChange = (value) => {
    setFilters({
      ...filters,
      _page: 1,
      title_like: value.formValue,
    });
  };

  return (
    <div className="post">
      <h3>Post List</h3>
      <PostFilterForm onSubmitForm={handleFilterChange} />
      <PostList postList={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default Post;
