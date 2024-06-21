"use client"; // Add this directive at the top

import { Inter } from "next/font/google";
import "../app/globals.css";
import Link from 'next/link';
import { FaHome, FaBoxOpen } from 'react-icons/fa';
import { usePageContext } from '../app/pageContext';
import SettingsMenu from '../app/components/SettingsMenu'; // Import the SettingsMenu component

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPage } = usePageContext();

  return (
    <div className={inter.className}>
      <div className="flex flex-col h-screen">
        <nav className="w-full bg-gray-50 text-gray-800 p-4 shadow-md flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/home" legacyBehavior>
              <a className="flex items-center hover:text-gray-600">
                <FaHome className="text-2xl mr-2" />
                <span className="text-lg">Home</span>
              </a>
            </Link>
            <Link href="/explore" legacyBehavior>
              <a className="flex items-center hover:text-gray-600">
                <FaBoxOpen className="text-2xl mr-2" />
                <span className="text-lg">Explore</span>
              </a>
            </Link>
          </div>
        </nav>
        <div className="flex h-full">
          <aside className="w-64 bg-gray-50 text-gray-800 p-6 rounded-lg shadow-md">
            <nav>
              <ul>
                {currentPage === 'home' && (
                  <li className="mb-4 flex items-center p-2 rounded hover:bg-gray-200">
                    <Link href="/home" legacyBehavior>
                      <a className="flex items-center hover:text-gray-600">
                        Overview
                      </a>
                    </Link>
                  </li>
                )}
                {currentPage === 'explore' && (
                  <SettingsMenu /> // Use the SettingsMenu component
                )}
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-6 bg-gray-100 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
