import React from "react";
import { Outlet, Link } from 'react-router-dom';

function AuthPage() {
  return <>
   <main>
        <div className="form-container">
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
        </div>
      </main>
<Outlet/>
  </>;
}

export default AuthPage;
