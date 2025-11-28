import React, { useState, useEffect } from "react";
import "./UserInfo.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserInfo() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(res.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (!user) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={user.image} alt="Profile" />
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <span className="role">{user.role}</span>
        </div>

        <hr />

        <div className="card-body">
          <div className="info-item">
            <span className="label">Email:</span>
            <span className="value">{user.email}</span>
          </div>
          <div className="info-item">
            <span className="label">Phone:</span>
            <span className="value">{user.phone}</span>
          </div>
          <div className="info-item">
            <span className="label">Location:</span>
            <span className="value">
              {user.company?.address?.city}, {user.company?.address?.country}
            </span>
          </div>
          <div className="info-item">
            <span className="label">University:</span>
            <span className="value">{user.university}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
