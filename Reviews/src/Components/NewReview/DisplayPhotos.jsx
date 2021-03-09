import React from 'react';
import PropTypes from 'prop-types';

const DisplayPhotos = ({ photos, photoModal }) => {
  let id = 0
  const allPhotos = photos.map((photo) => (
    <img className="rNewPhoto"
      onClick={() => { photoModal(photo); }}
      src={photo}
      style={{ width: 50 }}
      alt=""
      key={id++}
    />
  ));
  return (
    <div >
      {allPhotos}
    </div>
  );
};

export default DisplayPhotos;
