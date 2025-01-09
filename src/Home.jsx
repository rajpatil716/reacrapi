// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import  './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (with Popper.js)
// Importing Bootstrap styles



const Home = () => {
  // State variables for user form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  // Handle form submission (Insert)
  const handleSubmit = (e) => {
    e.preventDefault();

    // POST request to insert data into the server
    axios
      .post('http://localhost:3000/api/users', { name, email })
      .then((response) => {
        if(response.status == 201){
         alert('user added successfully')
        }
        console.log('Data inserted:', response.data);
        setName('');
        setEmail('');
      })
      .catch((error) => {
        console.error('There was an error inserting the data:', error);
      });
  };

  // Fetch all users from the server
  const fetchUsers = () => {
    axios
      .get('http://localhost:3000/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the users:', error);
      });
  };

  return (
    <div className="container border">
      <h2>User Form</h2>
      
      {/* Form to add name and email */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Button to fetch and display users */}
      <button onClick={fetchUsers} className="btn btn-info mb-3">Get Users</button>

      {/* Displaying fetched users */}
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
