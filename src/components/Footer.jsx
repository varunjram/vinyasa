import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const socialLinks = [
    {
      url: "https://github.com/varunjram",
      icon: "https://img.icons8.com/wired/64/000000/github.png",
      altName: "GitHub",
    },
    {
      url: "https://twitter.com/66Varun",
      icon: "https://img.icons8.com/wired/64/000000/twitter-squared--v1.png",
      altName: "Twitter",
    },
    {
      url: "https://www.linkedin.com/in/vjram66/",
      icon: "https://img.icons8.com/wired/64/000000/linkedin--v1.png",
      altName: "LinkedIn",
    },
    {
      url: "https://www.instagram.com/varun_jram/",
      icon: "https://img.icons8.com/wired/64/000000/instagram-new--v1.png",
      altName: "Instagram",
    },
  ];
  return (
    <main className="footer p-8 grid col-12 ml-0">
      <div className=" col-12 lg:col-8">
        <p>Vinayasa</p>
        <p>Find Your Fashion Flow at Vinyasa - Where Every Step is a Statement</p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>© 2023 Vinyasa</p>
      </div>

      <div className="grid col-12 lg:col-4 ">
        <div className="col-6 lg:col-6">
          <p>Pages</p>
          {[
            { to: "/", linkName: "Home" },
            { to: "/cart", linkName: "Cart" },
            { to: "/wishlist", linkName: "Wishlist" },
          ]?.map((link) => (
            <p>
              <Link
                to={link.to}
                className="cursor-pointer">
                {link.linkName}
              </Link>
            </p>
          ))}
        </div>
        <div className="col-12 lg:col-6">
          <p>Resources</p>
          {[
            { to: "/login", linkName: "Sign Up" },
            { to: "/signUp", linkName: "Sign In" },
          ]?.map((link) => (
            <p>
              <Link
                to={link.to}
                className="cursor-pointer">
                {link.linkName}
              </Link>
            </p>
          ))}
        </div>
        <div className="flex justify-content-between  col-12">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              className="link cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              to={link.url}>
              <img
                src={link?.icon}
                alt={link?.altName}
                width="50px"
                height="50px"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Footer;
