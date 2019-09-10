import React from "react";
import Comment from "../Comment";

import "./styles.css";

function Post({ data }) {
  const { id, author, date, content, comments } = data;
  return (
    <article>
      <div id="user-data">
        <img src={author.avatar} />
        <div>
          <strong>{author.name}</strong>
          <p>{date}</p>
        </div>
      </div>
      <p>{content}</p>
      <hr />
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </article>
  );
}

export default Post;
