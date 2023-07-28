import React from 'react';
import './BeforeAfterPage.css';

const beforeAfterData = [
  {
    id: 1,
    beforeImageUrl: 'https://res.cloudinary.com/duz2ivzgc/image/upload/v1690352383/img-1_mht8u4.jpg', 
    description: 'Before And After',
  },
  {
    id: 1,
    beforeImageUrl: 'https://res.cloudinary.com/duz2ivzgc/image/upload/v1690352384/img-2_c2tdtc.jpg', 
    description: 'Before And After',
  },
  {
    id: 1,
    beforeImageUrl: 'https://res.cloudinary.com/duz2ivzgc/image/upload/v1690352384/img_b1z2sv.jpg', 
    afterImageUrl: '/path-to-after-image-1.jpg', 
    description: 'Before And After',
  },
];

const BeforeAfterPage = () => {
  return (
    <div className="before-after-page">
      <h2>Before and After Results</h2>
      <div className="before-after-grid">
        {beforeAfterData.map((result) => (
          <div key={result.id} className="before-after-item">
            <img src={result.beforeImageUrl} alt="Before And After" />
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterPage;
