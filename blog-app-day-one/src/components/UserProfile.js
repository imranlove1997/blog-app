import React from 'react';
import {
  articlesURL,
  userProfile,
} from '../utils/constant';
import Pagination from './Pagination';
import Posts from './Posts';
import ProfileBanner from './ProfileBanner';

class UserProfile extends React.Component {
  state = {
    activeTab: 'author',
    articles: [],
    user: {},
  };

  fetchArticlesData = () => {
    fetch(
      articlesURL +
        `/?${this.state.activeTab}=${this.state.user.username}`
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

  fetchData = (username) => {
    fetch(userProfile + `/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Can not fetch data for specific user!`
          );
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ user: data.profile });
      })
      .catch((err) => {
        this.setState({
          error: 'Not able to fetch articles!',
        });
      });
  };

  async componentDidMount() {
    let user = this.props.match.params.username;
    await this.fetchData(user);
    await this.fetchArticlesData();
  }

  handleActive = (tab) => {
    this.setState({ activeTab: tab }, () => {
      this.fetchData();
    });
  };

  render() {
    const { activeTab } = this.state;
    const { user } = this.state;
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

export default UserProfile;
