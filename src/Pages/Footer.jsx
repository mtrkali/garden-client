// src/components/Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-6 md:px-20 font-sans shadow-accent">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Contact Info */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-2 text-white">Contact Info</h3>
                    <p>Email: sahdat234@gmail.com</p>
                    <p>Phone: +880 018 71 456 300</p>
                    <p>Location:  Dhaka, Bangladesh</p>
                </div>

                {/* Terms */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2 text-white">Terms</h3>
                    <ul className="space-y-1">
                        <li><a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold mb-2 text-white">Follow Us</h3>
                    <div className="flex justify-center md:justify-end space-x-4 text-xl text-gray-400">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
                &copy; {new Date().getFullYear()} Garden Resource. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
