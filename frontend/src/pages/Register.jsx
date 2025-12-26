import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      navigate("/", {
        state: { message: "Register berhasil, silakan login" },
      });
    } catch (err) {
      alert(err.response?.data?.message || "Register gagal");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3 className="mb-3">Register</h3>

      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          placeholder="Nama"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-success w-100">Register</button>
      </form>

      <p className="mt-3 text-center">
        Sudah punya akun? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
