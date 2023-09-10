import React, { useEffect } from 'react';

import './App.css';

import Form from './request/Form.js';

function App() {
  useEffect(() => {
    // api.get('/product/id/3').then(res => console.log('GET', res.data));
    // api.post('/product/filter', { code: 3 }).then(res => console.log('POST', res.data));
  });

  // async function request(url, method, data) {
  //   if (method === "GET") {
  //     api.get(url).then(res => console.log('GET', res.data));
  //   }

  //   if (method === "GET") {
  //     api.post(url, data).then(res => console.log('GET', res.data));
  //   }
  // };

  return (
    <Form></Form>
  );
}

export default App;
