import React from 'react';
import Banner from './Banner';
import Posts from './Posts';
import FeedNav from './FeedNav';
import Sidebar from './Sidebar';
import Pagination from './Pagination';

function Home(props) {
  return (
    <main>
      <Banner />
      <div className="padding">
        <div className="container col-xs-4 item-start">
          <section className="span-xs-3">
            <FeedNav />
            <Posts />
            <Pagination />
          </section>
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

export default Home;
