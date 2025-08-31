import React from "react";
import { useAuthContext } from "../context/AuthContext";

const handleLogOut = () => {
  logout();
};

const Profile = () => {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-2xl border border-base-300">
          <div className="card-body items-center text-center">
            {/* Avatar */}
            <div className="avatar mb-4">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-lg">
                <img src="https://i.pravatar.cc/300" alt="Profile" />
              </div>
            </div>

            {/* Name & Job */}
            <h2 className="card-title text-3xl font-bold">John Doe</h2>
            <p className="text-base-content/70 mb-2">Full Stack Developer</p>
            {/* Divider */}
            <div className="divider my-4"></div>
            {/* Actions */}
            <div className="card-actions flex flex-col sm:flex-row gap-3 w-full">
              <button className="btn btn-primary flex-1">แก้ไขโปรไฟล์</button>
              <a className="btn btn-outline flex-1" onClick={handleLogOut}>
                ออกจากระบบ
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;