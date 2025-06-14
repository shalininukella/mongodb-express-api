import { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../api/users";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => setUsers(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      {users.map((user) => (
        <div key={user._id} className="bg-white p-4 m-2 shadow rounded">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p>{user.email}</p>
          <p>Age: {user.age}</p>

          <button
            className="text-red-500"
            onClick={() => handleDelete(user._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
