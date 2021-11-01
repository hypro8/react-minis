import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import {
  FaBars,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import { links, social } from "./data";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight.height}px`;
      linksContainerRef.current.style.background = "#a12";
    } else {
      linksContainerRef.current.style.height = "0";
    }
  }, [showLinks]);
  
  return (
    <nav>
      {/* <Logo /> */}
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className={"links-container"} ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((item) => (
            <li>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
          {/* <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
