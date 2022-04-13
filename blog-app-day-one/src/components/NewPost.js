import React from 'react';
import { withRouter } from 'react-router-dom';
import { articlesURL } from '../utils/constant';

class NewPost extends React.Component {
  state = {
    title: '',
    description: '',
    body: '',
    tagList: '',
    errors: {
      title: '',
      description: '',
      body: '',
      tagList: '',
    },
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    let errors = { ...this.state.errors };
    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      title,
      description,
      body,
      tagList,
    } = this.state;
    fetch(articlesURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${this.props.user.token}`,
      },
      body: JSON.stringify({
        article: {
          title,
          description,
          body,
          tagList: tagList
            .split(',')
            .map((tag) => tag.trim()),
        },
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Can not create new article!');
        }
        return res.json();
      })
      .then(({ article }) => {
        console.log(article);
        this.setState({
          title: '',
          description: '',
          tagList: '',
          body: '',
        });
        this.props.history.push('/');
      })
      .catch((errors) => this.setState({ errors }));
  };

  render() {
    let {
      errors,
      title,
      description,
      body,
      tagList,
    } = this.state;
    return (
      <div className='md-wrapper padding'>
        <form className='form form-login' action=''>
          <fieldset className='form-group'>
            <input
              className='form-control'
              type='text'
              placeholder='Article Title'
              name='title'
              onChange={this.handleChange}
              value={title}
            />
            <input
              className='form-control'
              type='text'
              placeholder="What's this article is all about?"
              name='description'
              onChange={this.handleChange}
              value={description}
            />
            <textarea
              className='form-control'
              rows='10'
              placeholder='Write your article(In markdown format)'
              name='body'
              onChange={this.handleChange}
              value={body}
            ></textarea>
            <input
              className='form-control'
              type='text'
              placeholder='Enter Tags'
              name='tagList'
              onChange={this.handleChange}
              value={tagList}
            />
            <div className='text-right'>
              <input
                className='btn btn-primary'
                type='submit'
                value='Publish Article'
                onClick={this.handleSubmit}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default withRouter(NewPost);
