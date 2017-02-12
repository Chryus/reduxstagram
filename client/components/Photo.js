import React from 'react';
import { Link } from 'react-router';

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
            {post.caption}
          </Link>
        </div>
      </figure>
    )
  }
}

export default Photo;