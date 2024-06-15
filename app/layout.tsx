"use client"; // Add this directive at the top

import { Inter } from "next/font/google";
import "../app/globals.css";
import Link from 'next/link';
import { FaHome, FaHeart, FaBoxOpen, FaCog, FaGlobe } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
                    Overview
                  </a>
                </Link>
              </li>
              <li className="mb-4 flex items-center p-2 rounded hover:bg-gray-200">
                <Link href="/favorites" legacyBehavior>
                  <a className="flex items-center hover:text-gray-600">
                    <FaHeart className="mr-2" />
                    Favorites
                  </a>
                </Link>
              </li>
              <li className="mb-4 flex items-center p-2 rounded hover:bg-gray-200">
                <Link href="/subscriptions" legacyBehavior>
                  <a className="flex items-center hover:text-gray-600">
                    <FaBoxOpen className="mr-2" />
                    Subscriptions
                  </a>
                </Link>
              </li>
              <li className="mb-4 flex items-center p-2 rounded hover:bg-gray-200">
                <Link href="/settings" legacyBehavior>
                  <a className="flex items-center hover:text-gray-600">
                    <FaCog className="mr-2" />
                    Settings
                  </a>
                </Link>
              </li>
              <li className="mb-4 flex items-center p-2 rounded hover:bg-gray-200">
                <Link href="/creator-tools" legacyBehavior>
                  <a className="flex items-center hover:text-gray-600">
                    <FaGlobe className="mr-2" />
                    Creator Tools
                  </a>
                </Link>
              </li>
            </ul>
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
