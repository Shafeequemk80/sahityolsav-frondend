import React from "react";
import { useNavigate } from "react-router-dom";
import { FaImage, FaClipboardList, FaUsers, FaListAlt, FaSignOutAlt, FaHome } from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();
  const cards = [
    { title: "Add Image", icon: <FaImage />, color: "bg-blue-500", path: "/admin/addImage" },
    { title: "Add Result", icon: <FaClipboardList />, color: "bg-green-500", path: "/admin/addresult" },
    { title: "Add Team Point", icon: <FaUsers />, color: "bg-yellow-500", path: "/admin/addteampoint" },
    { title: "All Results", icon: <FaListAlt />, color: "bg-purple-500", path: "/admin/allresult" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-5 md:mx-52   px-4 py-8 ">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Admin Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6  mb-6">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              className={`p-6 rounded-lg shadow-lg ${card.color} text-white flex flex-col items-center justify-center  hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
          ))}
        </div>

        {/* Home and Logout Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            onClick={() => navigate("/")}
            className="p-4 rounded-lg shadow-lg bg-indigo-500 text-white flex  flex-col items-center justify-center hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="text-4xl mb-2">
              <FaHome />
            </div>
            <h3 className="text-lg font-semibold">Go to Home</h3>
          </div>

          <div
            onClick={handleLogout}
            className="p-4 rounded-lg shadow-lg bg-red-500 text-white flex flex-col  items-center justify-center hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="text-4xl mb-2">
              <FaSignOutAlt />
            </div>
            <h3 className="text-lg font-semibold">Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
