
import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <h1>Veronika's Fashion Blog</h1>
      <h2>Better-Dressed People</h2>
      <Nav
        links={[
          { href: "#Women's", text: "Women's" },
          { href: "#Men's", text: "Men's" },
          { href: "#OntheStreet", text: "On the Street" },
          { href: "#thecatwalk", text: "The Cat Walk" },
          { href: "#adWatch", text: "AdWatch" },
          { href: "#about", text: "About" },
        ]}
        ariaLabel="Main Navigation"
      />
    </header>
  );
}

export default Header;
