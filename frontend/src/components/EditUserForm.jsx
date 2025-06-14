import { useState, useEffect } from "react";
import { updateUser, getUser } from "../api/users";

export default function EditUserForm({ userId, onDone }) {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  useEffect(() => {
    getUser(userId).then((res) => setForm(res.data));
  }, [userId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(userId, form);
    alert("User updated");
    onDone();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="age"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="email"
      />
      <button type="submit">Save</button>
    </form>
  );
}
