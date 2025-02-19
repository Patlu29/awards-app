import React from "react";
import { useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

const navItems = ["Nexus", "Vault", "Prolog", "About", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 flex items-center gap-1"
            />
          </div>
          <div className="flex hfull items-center">
            <div className="md:flex">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className="nav-hover-btn"
                  href={`${item.toLowerCase()}`}
                >
                  {" "}
                  {item}{" "}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
