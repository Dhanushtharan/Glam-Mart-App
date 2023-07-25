import React, { useState } from 'react';
import './book.css';

const Book = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking submission logic here
    console.log('Booking submitted!');
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDate('');
    setTime('');
  };

  return (
    <div className='bookBody'>
        <h2> BOOK APPOINTMENT</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />

        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <label htmlFor="phone">Phone:</label>
        <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
        />

        <label htmlFor="service">Service:</label>
        <input
            type="text"
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
        />

        <label htmlFor="date">Date:</label>
        <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
        />

        <label htmlFor="time">Time:</label>
        <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
        />

        <div className='submit' style={{marginLeft:'-280px'}}>
          <button type="submit" >Submit</button><br></br>
          
        </div>
        </form>
    </div>
  );
};

export default Book;
