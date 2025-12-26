import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function BarangEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nama: "", harga: "", stok: "" });

  useEffect(() => {
    api.get(`/barang/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/barang/${id}`, form);
    navigate("/barang", {
      state: {
        message: "Barang berhasil diedit",
        type: "success",
      }
    });
  };

  return (
    <div className="container mt-4">
      <h3>Edit Barang</h3>
      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
        />
        <input
          className="form-control mb-2"
          value={form.harga}
          onChange={(e) => setForm({ ...form, harga: e.target.value })}
        />
        <input
          className="form-control mb-2"
          value={form.stok}
          onChange={(e) => setForm({ ...form, stok: e.target.value })}
        />
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
