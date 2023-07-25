import React from 'react';
import './BeforeAfterPage.css';

const beforeAfterData = [
  {
    id: 1,
    beforeImageUrl: '/path-to-before-image-1.jpg', // Replace with the actual image path
    afterImageUrl: '/path-to-after-image-1.jpg', // Replace with the actual image path
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    beforeImageUrl: '/path-to-before-image-1.jpg', // Replace with the actual image path
    afterImageUrl: '/path-to-after-image-1.jpg', // Replace with the actual image path
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    beforeImageUrl: '/path-to-before-image-1.jpg', // Replace with the actual image path
    afterImageUrl: '/path-to-after-image-1.jpg', // Replace with the actual image path
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const BeforeAfterPage = () => {
  return (
    <div className="before-after-page">
      <h2>Before and After Results</h2>
      <div className="before-after-grid">
        {beforeAfterData.map((result) => (
          <div key={result.id} className="before-after-item">
            <img src={result.beforeImageUrl} alt="Before" />
            <img src={result.afterImageUrl} alt="After" />
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterPage;
