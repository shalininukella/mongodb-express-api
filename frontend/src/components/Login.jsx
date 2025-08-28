import { useState, useEffect} from "react";

export default function Login() {
  const [text, setText] = useState("");
  const [form, setForm] = useState({ email, password });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ email: "", password: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
