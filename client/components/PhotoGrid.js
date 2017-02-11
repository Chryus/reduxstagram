import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {

  constructor(props) {
    super(props);
  };

  puke() {
    return (
      <pre>
        {JSON.stringify(this.props.posts, null, ' ')}
      </pre>
    )
  }

  render() {
    //return this.puke(this.props.posts);
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => 
          <Photo {... this.props} key={i}/>
        )}
      </div>
    )
  }
}

export default PhotoGrid;