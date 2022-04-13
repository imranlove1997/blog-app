import React from "react";
import { Link } from "react-router-dom";

function SinglePost(props) {
  return (
    <article className="single-post">
      <header className="post-banner padding">
        <div className="md-wrapper">
          <h1 className="post-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            similique!
          </h1>
          <div className=" flex item-center">
            <Link to="/profile">
              <img
                className="author-img"
                src="/images/smiley.jpg"
                alt="Smiley"
              />
            </Link>
            <div className="post-details">
              <Link to="/profile">
                <p className="post-author">Annie</p>
              </Link>
              <time className="post-time" datetime="">
                Wed Feb 10 2021
              </time>
            </div>
          </div>
        </div>
      </header>
      <div className="md-wrapper">
        <div className="single-post-body padding">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            similique ab, corporis aliquid possimus voluptatum maxime neque
            quibusdam deserunt repellat in. Ipsum et sunt cum nulla corrupti
            iste illum exercitationem!
          </p>
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sit,
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            a omnis odit doloremque magni corrupti necessitatibus soluta, optio
            amet? Beatae esse tempora ex quo libero dicta fuga dolor at
            obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut at fugit, magnam repellat impedit, quidem perspiciatis illo
            maiores nesciunt cum possimus minus voluptate esse ducimus enim iure
            ab velit quaerat.
          </p>
          <h3>maiores nesciunt cum possimus minus voluptate esse</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            iusto nulla distinctio quo quam molestiae sapiente itaque, facere
            incidunt esse natus consequatur, veniam ut reprehenderit. Ad aperiam
            maxime dolor reiciendis!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, quos.
            Quidem soluta consectetur quod, dolorum ducimus repellendus
            laudantium laborum architecto a nulla neque cumque ad unde animi
            ipsum odio suscipit!
          </p>
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sit,
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, quos.
            Quidem soluta consectetur quod, dolorum ducimus repellendus
            laudantium laborum architecto a nulla neque cumque ad unde animi
            ipsum odio suscipit!
          </p>
        </div>
      </div>
      <footer className="padding text-center post-footer">
        <div className="md-wrapper">
          <p>
            <Link to="/login">Sign in</Link> or
            <Link to="/signup"> sign up</Link> to add comments on this article.
          </p>
        </div>
      </footer>
    </article>
  );
}

export default SinglePost;
