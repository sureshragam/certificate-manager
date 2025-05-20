import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UploadPage } from "./Pages/UploadPage";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="upload-documents" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
