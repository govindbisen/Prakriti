import { useState } from "react";

import "./App.css";
import logo from "./assets/iskon.png";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <div>
          {/* <img src={logo} className="App-logo" alt="ISKON LOGO" /> */}
          Prakriti MPPSC
        </div>
        <div>
          <ul>
            <li>
              <a href="#"> About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> Blog</a>
            </li>
            <li>
              <a href="#"> Zoom Classes</a>
            </li>
            <li>
              <a href="#"> Test</a>
            </li>
            <li>
              <a href="#"> Contacts</a>
            </li>
            <li>
              <a href="#"> Donate</a>
            </li>
            <li>
              <a href="#"> Login</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <article>article</article>
        <aside>aside</aside>
      </main>
      <footer>
        <p>
          ©Copyright prakrati RAVI-GOVIND. All rights reversed.under
          construction...
        </p>
        <a href="https://youtube.com/@PrakritiMPPSC">YouTube</a> <br></br>
        <a href="https://www.facebook.com/Prakriti-MPPSC-107311648723955/">
          FaceBook
        </a>
        <br></br>
        <a href="https://t.me/PrakritiMppsc">Telegram</a>
      </footer>
    </>
  );
}

export default App;
