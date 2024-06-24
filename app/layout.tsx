"use client";

import { Inter } from "next/font/google";
import "../app/globals.css";
import Link from 'next/link';
import { FaHome, FaBoxOpen } from 'react-icons/fa';
import { usePageContext } from '../app/pageContext';
import SettingsMenu from '../app/components/SettingsMenu'; // Import SettingsMenu here

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPage } = usePageContext();
  return (
    <div className={inter.className}>
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-50 text-gray-800 p-6 rounded-lg shadow-md">
          <nav>
            <ul>
              <li className="mb-4 flex items-center p-2 rounded hover:bg-gray-200">
                <Link href="/home" legacyBehavior>
                  <a className="flex items-center hover:text-gray-600">
                    <FaHome className="mr-2" />
                    Home
                  </a>
                </Link>
              </li>
              <li className="mb-4 flex items-center p-2 rounded hover:bg-gray-200">
                <Link href="/explore" legacyBehavior>
                  <a className="flex items-center hover:text-gray-600">
                    <FaBoxOpen className="mr-2" />
                    Explore
                  </a>
                </Link>
              </li>
            </ul>
            {/* Conditionally render the SettingsMenu only for the Explore page */}
            {currentPage === 'explore' && (
              <SettingsMenu onApply={() => {}} />
            )}
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
