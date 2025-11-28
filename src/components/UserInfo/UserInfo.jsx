import React, { useState, useEffect } from 'react';
import './UserInfo.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserInfo() {
  // 1. تصحيح: يجب وضع الأقواس {} لاستخراج الـ id لأن useParams تعيد كائناً
  const { id } = useParams(); 
  
  // سنبدأ بـ null لنعرف هل تم جلب البيانات أم لا
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // تأكد أن الـ id صحيح
        const res = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(res.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    if (id) {
        fetchUser();
    }
  }, [id]); // أضفنا id هنا ليعيد الجلب إذا تغير المستخدم

  // 2. تصحيح: إذا لم يتم جلب البيانات بعد (user ما زال null)، اعرض رسالة تحميل
  // هذا يمنع الخطأ لأننا لن نحاول قراءة user.company قبل وصول البيانات
  if (!user) {
    return <div style={{textAlign: 'center', marginTop: '50px'}}>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        
        <div className="card-header">
            <img src={user.image} alt="Profile" />
            <h2>{user.firstName} {user.lastName}</h2>
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
                {/* استخدمنا العلامة ؟ (Optional Chaining) كحماية إضافية 
                   بمعنى: لو company موجودة، هات address، وإلا توقف ولا تظهر خطأ
                */}
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
};

export default UserInfo;