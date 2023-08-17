import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Outlet, Link } from 'react-router-dom';

function AuthPage() {
  return <>
   <main>
        <div className="form-container">
          <nav>
            <ul>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </main>
   
  </>;
}

export default AuthPage;
