import React from 'react';
import { Link } from 'react-router-dom';

function Post(props) {
  const {
    author,
    createdAt,
    title,
    description,
    favoritesCount,
    slug,
  } = props;
  return (
    <article className='post'>
      <header className='flex justify-between item-center'>
        <div className=' flex item-center'>
          <Link to={`/profile/${author.username}`}>
            <img
              className='author-img'
              src={author.image || '/images/smiley.jpg'}
              alt={author.username}
            />
          </Link>
          <div className='post-details'>
            <Link to={`/profile/${author.username}`}>
              <p className='post-author'>
                {author.username}
              </p>
            </Link>
            <time className='post-time' dateTime=''>
              {createdAt}
            </time>
          </div>
        </div>
        <div className='like-btn'>
          <span>&hearts;</span>
          <span>{favoritesCount}</span>
        </div>
      </header>
      <Link to={`/article/${slug}`}>
        <div className='post-body'>
          <h2 className='post-title'>{title}</h2>
          <p className='post-text'>{description}</p>
        </div>
      </Link>
      <footer>
        <Link
          className='read-more-btn'
          to={`/article/${slug}`}
        >
          Read More
        </Link>
      </footer>
    </article>
  );
}

export default Post;
