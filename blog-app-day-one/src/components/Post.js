import React from 'react';
import { Link } from 'react-router-dom';

function Post(props) {
  const { author, createdAt, title, description, favoritesCount } = props;
  return (
    <article className="post">
      <header className="flex justify-between item-center">
        <div className=" flex item-center">
          <Link to="/profile">
            <img
              className="author-img"
              src={author.image || '/images/smiley.jpg'}
              alt={author.username}
            />
          </Link>
          <div className="post-details">
            <Link to="/profile">
              <p className="post-author">{author.username}</p>
            </Link>
            <time className="post-time" datetime="">
              {createdAt}
            </time>
          </div>
        </div>
        <div className="like-btn">
          <span>&hearts;</span>
          <span>{favoritesCount}</span>
        </div>
      </header>
      <Link to="/singlepost">
        <div className="post-body">
          <h2 className="post-title">{title}</h2>
          <p className="post-text">{description}</p>
        </div>
      </Link>
      <footer>
        <Link className="read-more-btn" to="/singlepost">
          Read More
        </Link>
      </footer>
    </article>
  );
}

export default Post;
