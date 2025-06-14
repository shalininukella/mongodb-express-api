import { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../api/users";
import EditUserForm from "./EditUserForm";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = () => {
    getAllUsers().then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  // 🔍 Filtered users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {editId && (
        <EditUserForm
          userId={editId}
          onDone={() => {
            setEditId(null);
            fetchUsers();
          }}
        />
      )}

      <h1 className="text-2xl font-bold mb-2">Users</h1>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search users by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      {filteredUsers.map((user) => (
        <div key={user._id} className="bg-white p-4 m-2 shadow rounded">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p>{user.email}</p>
          <p>Age: {user.age}</p>

          <button
            className="text-red-500 mr-4"
            onClick={() => handleDelete(user._id)}
          >
            Delete
          </button>
          <button
            className="text-green-500"
            onClick={() => setEditId(user._id)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
