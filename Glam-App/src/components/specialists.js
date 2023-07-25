import React from 'react';
import './specialists.css';

const specialists = [
  {
    id: 1,
    name: 'Jane Doe',
    expertise: 'Hair Stylist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    photoUrl: 'https://res.cloudinary.com/duz2ivzgc/image/upload/v1690276377/nathan-fertig-5EIW3DDX6dw-unsplash_ct9her.jpg',
  },
  {
    id: 2,
    name: 'Dhanush',
    expertise: 'Hair Care',
    description: 'Toni & Guy-6 years Work Experiance',
    photoUrl:' https://res.cloudinary.com/duz2ivzgc/image/upload/v1690276317/img3_i53klb.jpg',
  },
  {
    id: 3,
    name: 'Kamalesh',
    expertise: 'Massage',
    description: 'Nuru massage center supervisor',
    photoUrl: 'https://res.cloudinary.com/duz2ivzgc/image/upload/v1690276389/usen-parmanov-I4sxk05Fxn0-unsplash_qxftoz.jpg',
  },

];

const Specialists = () => {
  return (
    <div className="specialists-page">
      <h2>Meet Our Beauty Specialists</h2>
      <div className="specialists-list">
        {specialists.map((specialist) => (
          <div key={specialist.id} className="specialist-card">
            <img src={specialist.photoUrl} alt={specialist.name} />
            <h3>{specialist.name}</h3>
            <p>{specialist.expertise}</p>
            <p>{specialist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
