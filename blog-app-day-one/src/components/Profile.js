import React from 'react';
import { articlesURL } from '../utils/constant';
import Pagination from './Pagination';
import Posts from './Posts';
import ProfileBanner from './ProfileBanner';

class Profile extends React.Component {
  state = {
    activeTab: 'author',
    articles: [],
  };

  fetchData = () => {
    fetch(
      articlesURL +
        `/?${this.state.activeTab}=${this.props.user.username}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Can not fetch data for specific user!`
          );
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          articles: data.articles,
        });
      })
      .catch((err) => {
        this.setState({
          error: 'Not able to fetch articles!',
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleActive = (tab) => {
    this.setState({ activeTab: tab }, () => {
      this.fetchData();
    });
  };

  render() {
    const { activeTab } = this.state;
    const { user } = this.props;
    return (
      <section>
        <ProfileBanner user={user} />
        <div className='padding'>
          <div className='md-wrapper'>
            <div className='nav'>
              <button
                onClick={() => this.handleActive('author')}
                className={
                  activeTab === 'author' && 'active'
                }
              >
                My Articles
              </button>
              <button
                onClick={() =>
                  this.handleActive('favorited')
                }
                className={
                  activeTab === 'favorited' && 'active'
                }
              >
                Favorited Articles
              </button>
            </div>
            <Posts articles={this.state.articles} />
            <Pagination />
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
