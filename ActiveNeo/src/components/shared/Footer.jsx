import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-black to-purple-600 text-gray-300 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold text-lg">ActiveNeo</h3>
            <p className="mt-4">
              Revolutionising fitness tracking with decentralised data ownership
              and rewards.
            </p>
            <p className="mt-2">© 2024 ActiveNeo. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#workouts" className="hover:text-white">
                  Workouts
                </a>
              </li>
              <li>
                <a href="#rewards" className="hover:text-white">
                  Rewards & NFTs
                </a>
              </li>
              <li>
                <a href="#ai" className="hover:text-white">
                  AI Insights
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg">Newsletter</h3>
            <p className="mt-4">
              Stay updated with the latest news, features, and offers.
            </p>
            <form className="mt-4">
              <input
                type="email"
                className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold text-lg">Follow Us</h3>
            <p className="mt-4">Join the conversation on social media.</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.26 4 9.6 9.2 9.95v-7h-2.7v-2.95h2.7v-2.1c0-2.7 1.63-4.15 4.03-4.15 1.16 0 2.16.1 2.45.13v2.83h-1.68c-1.3 0-1.55.6-1.55 1.5v1.96h2.9l-.45 2.95h-2.45v7c5.2-.35 9.2-4.7 9.2-9.95 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.94 4.57c-.89.39-1.84.66-2.84.78a4.94 4.94 0 002.17-2.72 9.75 9.75 0 01-3.11 1.18 4.92 4.92 0 00-8.39 4.49 13.94 13.94 0 01-10.12-5.14 4.92 4.92 0 001.52 6.56A4.93 4.93 0 011.64 9.8v.06c0 2.4 1.71 4.41 3.98 4.87a4.9 4.9 0 01-2.22.08c.62 1.94 2.42 3.35 4.55 3.39A9.89 9.89 0 010 21.53a13.92 13.92 0 007.56 2.21c9.05 0 14.01-7.5 14.01-14v-.64c.95-.69 1.77-1.56 2.42-2.55z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163C6.458 2.163 2 6.622 2 12.163c0 4.416 3.657 8.064 8.409 8.834v-6.26h-2.53v-2.57h2.53V9.416c0-2.516 1.492-3.895 3.772-3.895 1.094 0 2.237.197 2.237.197v2.46h-1.259c-1.243 0-1.63.772-1.63 1.562v1.883h2.808l-.448 2.57h-2.36v6.26C18.344 20.228 22 16.579 22 12.163 22 6.622 17.542 2.163 12 2.163z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 5.186 3.667 9.486 8.438 10.847.618.114.847-.268.847-.598 0-.294-.01-1.07-.017-2.1-3.438.747-4.163-1.655-4.163-1.655-.562-1.427-1.372-1.808-1.372-1.808-1.123-.768.085-.752.085-.752 1.24.087 1.893 1.274 1.893 1.274 1.105 1.894 2.898 1.346 3.605 1.03.11-.802.432-1.346.785-1.656-2.744-.312-5.627-1.373-5.627-6.11 0-1.35.474-2.453 1.25-3.316-.126-.31-.542-1.562.12-3.253 0 0 1.022-.328 3.348 1.248.97-.27 2.012-.404 3.048-.41 1.036.006 2.078.14 3.048.41 2.326-1.576 3.348-1.248 3.348-1.248.662 1.691.246 2.943.12 3.253.776.863 1.25 1.966 1.25 3.316 0 4.75-2.887 5.793-5.639 6.096.445.384.838 1.146.838 2.31 0 1.666-.016 3.006-.016 3.417 0 .334.227.72.853.597C20.333 21.485 24 17.186 24 12c0-6.628-5.372-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6   border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            Built with <span className="text-red-500">♥</span> by ActiveNeo
            Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
