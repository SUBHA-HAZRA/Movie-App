import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <div className="flex gap-6 text-sm font-medium">
            <Link to="#" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="#" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <Link to="#" className="hover:text-blue-400 transition-colors">
              Privacy
            </Link>
            <Link to="#" className="hover:text-blue-400 transition-colors">
              Terms
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-lg">
            <Link to="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link to="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link to="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link to="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CinemaHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
