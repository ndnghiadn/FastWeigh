import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Admin from "./components/Admin";

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default App;
