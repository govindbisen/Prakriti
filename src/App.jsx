import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import NavRoute from "./Components/NavRoute";
import React from "react";

function App() {
  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const [token, setToken] = React.useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };
  return (
    <>
      {/* <Navbar/>
      <NavRoute/> */}

      <h1>React Router</h1>

      <Navigation token={token} onLogout={handleLogout} />

      <Routes>
        <Route index element={<Home onLogin={handleLogin} />} />
        <Route path="home" element={<Home onLogin={handleLogin} />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

const Navigation = ({ token, onLogout }) => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>

      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

const Home = ({ onLogin }) => {
  return (
    <>
      <h2>
        Home (Public){" "}
        <button type="button" onClick={onLogin}>
          Sign In
        </button>
      </h2>
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard (Protected)</h2>
    </>
  );
};

const NoMatch = () => {
  return (
    <>
      <h2>NoMatch </h2>
    </>
  );
};

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("2342f2f1d131rf12"), 250);
  });
