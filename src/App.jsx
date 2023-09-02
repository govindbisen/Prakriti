import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import NavRoute from "./Components/NavRoute";
import React from "react";
import { AuthProvider, useAuth } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";


function App() {
  // const [token, setToken] = React.useState(null);

  // const handleLogin = async () => {
  //   const token = await fakeAuth();
  //   setToken(token);
  // };

  // const handleLogout = () => {
  //   setToken(null);
  // };


  return (
    <>
    <AuthProvider>
      <Navbar/>
      <NavRoute/> 
      </AuthProvider>
    </>
  );
}

export default App;

/***
 * 
 * 
const Navigation = ({ token }) => {
  const { onLogout } = useAuth();
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/admin">Admin</NavLink>

      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};


const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });

const Home = ({ onLogin }) => {
  return (
    <>
      <h2>Home (Public)</h2>
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </>
  );
};

const Dashboard = () => {
  // const { token } = React.useContext(AuthContext);
  const { token } = useAuth();
  return (
    <>
      <h2>Dashboard (Protected)</h2>
    </>
  );
};




 *    <Navigation />
 *   {/* <Routes>
        <Route index element={<Home onLogin={handleLogin} />} />
        <Route path="home" element={<Home onLogin={handleLogin} />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
       <Route path="dashboard" element={<Dashboard />} /> 
        <Route path="*" element={<NoMatch />} />
      </Routes> 
 * 
 * 
 */

// const NoMatch = () => {
//   return (
//     <>
//       <h2>NoMatch</h2>
//     </>
//   );
// };

// const Admin = () => {
//   return (
//     <>
//       <h2>Admin (Protected)</h2>
//     </>
//   );
// };