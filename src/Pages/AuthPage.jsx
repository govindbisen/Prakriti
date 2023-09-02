import React from "react";
import { Outlet, Link } from 'react-router-dom';

function AuthPage() {
  return <>
   <main>
        <nav className="form-container">
          <nav>
            <ul>
              <li>
              <Link to="signup">Sign Up</Link>
              </li>
              <li> 
              <Link to="login">Login</Link>
              </li>
            </ul>
          </nav>
        </nav>
      </main>
<Outlet/>
  </>;
}

export default AuthPage;
