
import React from "react";

function Nav({ links, ariaLabel }) {
  return (
    <nav aria-label={ariaLabel} role="navigation">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
