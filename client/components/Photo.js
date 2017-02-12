import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { post, i, comments } = this.props
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/posts/{$post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo"/>
          </Link>

          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="like-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
        </figcaption>
      </figure> 
    )
  }
}

export default Photo;