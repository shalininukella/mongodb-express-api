import { useState, useEffect } from "react";
import { createUser } from "../api/users";

export default function Register() {
  const [text, setText] = useState("");
  const [form, setForm] = useState({ userName, email, password });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (id) => {
    await createUser(form);
    setForm({ userName: "", email: "", password: "" });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(id);
        }}
        placeholder="Name"
        type="text"
        value={text}
        name="email"
        onChange={handleChange}
      >
        <input
          placeholder="email"
          type="email"
          value={text}
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          value={text}
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
