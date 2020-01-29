import React from 'react';

const ImageList = (props) => {
  const i = 1;
  const images = props.images.map(({id, urls, description}) => {
      return <div key={id}>
        <img src={urls.small} alt={description} />
      </div>
  });

  return <div>
    {images}
  </div>
}

export default ImageList;
