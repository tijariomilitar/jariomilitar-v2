import React, { useState } from 'react';

import Api from '../Api.js';

function SimpleForm() {
  // Define the state for form input fields
  const [formData, setFormData] = useState({
    method: '',
    url: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.url.value);

    // const options = {
    //   headers: { "content-type": "application/json" }
    // }

    // let config = {
    //   data: {
    //     code: 10
    //   }
    // }

    const data = JSON.stringify({ code: 10 });
    const options = {
      method: e.target.method.value,
      headers: { "content-type": "application/json" }
    };

    Api(e.target.url.value, data, options)
      .then(res => console.log(res.data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="method">Method:</label>
          <input
            type="text"
            name="method"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="url"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;