import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <figure className="grid-figure">
        I am a photo!
      </figure>
    )
  }
}

export default Photo;