
import React from "react";

function Article({ title, imgSrc, imgAlt, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <img src={imgSrc} alt={imgAlt} />
      <p>{content}</p>
    </article>
  );
}

export default Article;
