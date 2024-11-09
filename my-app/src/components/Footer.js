
import React from "react";
import Nav from "./Nav";

function Footer() {
  return (
    <footer>
      <Nav
        links={[
          { href: "#Women's", text: "Women's" },
          { href: "#Men's", text: "Men's" },
          { href: "#OntheStreet", text: "On the Street" },
          { href: "#thecatwalk", text: "The Cat Walk" },
          { href: "#adWatch", text: "AdWatch" },
          { href: "#about", text: "About" },
        ]}
        ariaLabel="Footer Navigation"
      />
      <p>&copy; 2024 Valet Industries, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
