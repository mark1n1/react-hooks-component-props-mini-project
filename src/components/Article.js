import React from "react";

function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
  emojis
}) {
  return (
    <article>
      <h3>{ title }</h3>
      <small>{ date } · { emojis } { minutes } min to read.</small>
      <p>{ preview }</p>
    </article>
  );
}

export default Article;