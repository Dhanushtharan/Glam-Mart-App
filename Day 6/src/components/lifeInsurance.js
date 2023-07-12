import React, { useState } from 'react';
import './lifeInsurance.css';

const InsuranceApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    propertyValue: '',
    coverageAmount: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.fullName.trim()) {
      errors.fullName = 'FullName is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }

    if (!data.propertyValue.trim()) {
      errors.propertyValue = 'Property Value is required';
    } else if (isNaN(data.propertyValue)) {
      errors.propertyValue = 'Property Value must be a number';
    }

    if (!data.coverageAmount.trim()) {
      errors.coverageAmount = 'Coverage Amount is required';
    } else if (isNaN(data.coverageAmount)) {
      errors.coverageAmount = 'Coverage Amount must be a number';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className="image-container">
        {/* Image */}
        <img src="https://res.cloudinary.com/duj7wgdt8/image/upload/v1689175302/life-insurance-template-social-media-post_53876-119136_wslmce.jpg" alt="Home" />
      </div>
      <div className="form-container">
        {/* Text above the form */}
        <div className="text-container">
          <h1>
            Get Yourself <span className="blue-text">Insured</span> for just{' '}
            <span className="blue-text">₹99</span> per month
          </h1>
          <p>Please fill out the following information:</p>
        </div>

        {/* Insurance Application Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="propertyValue">Property Value:</label>
            <input
              type="text"
              id="propertyValue"
              name="propertyValue"
              value={formData.propertyValue}
              onChange={handleChange}
            />
            {errors.propertyValue && <span className="error">{errors.propertyValue}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="coverageAmount">Coverage Amount:</label>
            <input
              type="text"
              id="coverageAmount"
              name="coverageAmount"
              value={formData.coverageAmount}
              onChange={handleChange}
            />
            {errors.coverageAmount && <span className="error">{errors.coverageAmount}</span>}
          </div>
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default InsuranceApplication;
