import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function BarangTambah() {
  const [form, setForm] = useState({ nama: "", harga: "", stok: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/barang", form);
    navigate("/barang", {
      state: {
        message: "Barang berhasil ditambahkan",
        type: "success",
      }
    });
  };

  return (
    <div className="container mt-4">
      <h3>Tambah Barang</h3>
      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          placeholder="Nama"
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Harga"
          onChange={(e) => setForm({ ...form, harga: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Stok"
          onChange={(e) => setForm({ ...form, stok: e.target.value })}
        />
        <button className="btn btn-success">Simpan</button>
      </form>
    </div>
  );
}
