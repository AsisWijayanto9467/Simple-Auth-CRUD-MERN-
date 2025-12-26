import { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function BarangList() {
  const [barang, setBarang] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const jeda = 100;

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/barang");
      setBarang(res.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.state?.message && !location.state._shown) {
      setTimeout(() => {
        alert(location.state.message);

        navigate(location.pathname, {
          replace: true,
          state: { _shown: true },
        });
      }, jeda);
    }
  }, [location, navigate]);



  const hapus = async (id) => {
    const yakin = window.confirm("Apakah yakin ingin menghapus barang ini?");
    if (!yakin) return;
    await api.delete(`/barang/${id}`);

    const res = await api.get("/barang");
    setBarang(res.data);

    setTimeout(() => {
      alert("Barang berhasil dihapus");
    }, jeda);
  };


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/", {
      replace: true,
      state: { message: "Logout berhasil" },
    });
  };



  return (
    <div className="container mt-4">
      <h3>Data Barang</h3>
      <Link to="/tambah" className="btn btn-primary mb-3">
        + Tambah
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {barang.map((b) => (
            <tr key={b._id}>
              <td>{b.nama}</td>
              <td>{b.harga}</td>
              <td>{b.stok}</td>
              <td>
                <Link
                  to={`/edit/${b._id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => hapus(b._id)}
                  className="btn btn-danger btn-sm"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
}
