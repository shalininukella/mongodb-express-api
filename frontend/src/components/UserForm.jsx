import { useState } from "react";
import { createUser } from "../api/users";

export default function UserForm() {
  const [form, setForm] = useState({ name: "", age: "", email: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(form);
    setForm({ name: "", age: "", email: "" });
    alert("User created. Refresh to see changes.");
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 m-2"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        className="border p-2 m-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 m-2"
      />
      <button className="bg-blue-500 text-white p-2 m-2 rounded" type="submit">
        Add User
      </button>
    </form>
  );
}
