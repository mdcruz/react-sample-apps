import React from 'react';
import faker from 'faker';

const Images = () => {
  return (
    <div className="column">
      <img src={faker.image.avatar()} alt="avatar" />
    </div>
  );
};

export default Images;
