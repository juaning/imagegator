import React from 'react';

const PostItem = ({ title, img, url }) => (
  <div className="item">
    <a href={url}>
      <img src={img} alt={title} />
      <p>{title}</p>
    </a>
  </div>
);

export default PostItem;