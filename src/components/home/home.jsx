import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // 1. تعريف دالة لجلب البيانات داخل useEffect
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        // تأكدنا من البيانات قبل وضعها في الـ State
        setUsers(res.data.users.slice(0, 15));
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchUsers();
  }, []); // <--- 3. المصفوفة الفارغة مهمة جداً لتجنب التكرار اللانهائي

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
            <Link to={`/testUsers/user/${item.id}`}>View Profile</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
