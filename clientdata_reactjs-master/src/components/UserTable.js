import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserTable.css";

function UserTable() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
},[])

  return (
    <div>
      <h1>Dummy Data</h1>
      <table className="table" border={"-"}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.address.city}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;