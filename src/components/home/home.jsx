import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setUsers(res.data.users.slice(0, 15));
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchUsers();
  }, []); 

  console.log(users);

  return (
    <div className="users">
      {users.map((item) => {
        return (
          <div className="user" key={item.id}>
            <img src={item.image} alt={"image " + item.firstName} />
            <h2>{item.firstName + " " + item.lastName}</h2>
            <p>{item.email}</p>
            <p className="role">{item.role}</p>
            <hr />
            <Link to={`/testRouters/user/${item.id}`}>View Profile</Link>
          </div>
        );
      })}
    </div>
  );
}
