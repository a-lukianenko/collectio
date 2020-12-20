import React from "react";
// import PropTypes from "prop-types";
import { userDataType } from "../../types/types";

const Posts = ({ userData }) => {
  return (
    <>
      <h3>Posts</h3>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </>
  );
};

Posts.propTypes = {
  userData: userDataType.isRequired,
};

export default Posts;
