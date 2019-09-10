import React from "react";

import "./styles.css";

function Comment({ comment }) {
  return (
    <div id="comment">
      <img src={comment.author.avatar} />
      <p>
        <strong>{comment.author.name}</strong>
        {comment.content}
      </p>
    </div>
  );
}

export default Comment;
