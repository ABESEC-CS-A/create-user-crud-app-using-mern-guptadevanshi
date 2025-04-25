import React, { useState } from "react";
import "./UserApp.css"; 

function UserApp() {
  const [users, setUsers] = useState([
    { id: 1, email: "ab@gmail.com", name: "Ashish Bajpai", role: "teacher" },
    { id: 2, email: "pt@gmail.com", name: "Prashant Tomer", role: "admin" },
  ]);

  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    role: "student",
  });

  const handleAddUser = () => {
    if (!newUser.email || !newUser.name) return;
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ email: "", name: "", role: "student" });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (id) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setNewUser({ email: user.email, name: user.name, role: user.role });
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="container">
      <h1 className="header">MY USER APP</h1>
      <h2>List of Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>User Email</th>
            <th>User Name</th>
            <th>User Role</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>#</td>
            <td>
              <input
                type="email"
                placeholder="Enter User Email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter Name of User"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
            </td>
            <td>
              <select
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </td>
            <td>
              <button className="add-btn" onClick={handleAddUser}>
                Add User
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEditUser(user.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="footer">
        Design and Developed By Devanshi Gupta
      </footer>
    </div>
  );
}

export default UserApp;