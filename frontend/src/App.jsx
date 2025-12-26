import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarangList from "./pages/BarangList";
import BarangEdit from "./pages/BarangEdit";
import BarangTambah from "./pages/BarangTambah";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />  

                <Route path="/barang" element={<BarangList />} />
                <Route path="/tambah" element={<BarangTambah />} />
                <Route path="/edit/:id" element={<BarangEdit />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
