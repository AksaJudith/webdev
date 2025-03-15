import { useState } from "react";

const Header = ({ setPage }) => {
  return (
    <header>
      <h1>Welcome to Aksa's Web App</h1>
      <nav>
        <ul>
          <li><button onClick={() => setPage("home")}>Home</button></li>
          <li><button onClick={() => setPage("about")}>About</button></li>
          <li><button onClick={() => setPage("contact")}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
