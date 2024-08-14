'use client'
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
// import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState<string[]>(['solutions']);
  const router = useRouter();

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) =>
      prev.includes(menu) ? prev.filter((item) => item !== menu) : [...prev, menu]
    );
  };

  return (
    <div className="flex">
      <div className={`fixed inset-y-0 left-0 ${isOpen ? 'w-64' : 'w-16'} bg-gray-800 transition-all duration-300`}>
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <AiOutlineClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <button className="flex items-center text-white w-full px-4 py-2 hover:bg-gray-700" onClick={() => toggleMenu('solutions')}>
                <span className="mr-4">🌐</span>
                <span className={`flex-1 ${isOpen ? 'block' : 'hidden'}`}>Solutions</span>
                {isOpen && (
                  <span>{openMenus.includes('solutions') ? <AiOutlineDown /> : <AiOutlineRight />}</span>
                )}
              </button>
              {openMenus.includes('solutions') && isOpen && (
                <ul className="pl-8">
                  <li className="text-white px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => router.push('/dashboard')}>Dashboard</li>
                  <li className="text-white px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => router.push('/products')}>Products</li>
                </ul>
              )}
            </li>
            {/* <li>
              <button className="flex items-center text-white w-full px-4 py-2 hover:bg-gray-700" onClick={() => toggleMenu('projectViewer')}>
                <span className="mr-4">📊</span>
                <span className={`flex-1 ${isOpen ? 'block' : 'hidden'}`}>Project Viewer</span>
                {isOpen && (
                  <span>{openMenus.includes('projectViewer') ? <AiOutlineDown /> : <AiOutlineRight />}</span>
                )}
              </button>
              {openMenus.includes('projectViewer') && isOpen && (
                <ul className="pl-8">
                  <li className="text-white px-4 py-2 hover:bg-gray-700">Project Status</li>
                  <li className="text-white px-4 py-2 hover:bg-gray-700">Requirements</li>
                  <li className="text-white px-4 py-2 hover:bg-gray-700">Task Blocker</li>
                  <li className="text-white px-4 py-2 hover:bg-gray-700">Archive</li>
                </ul>
              )}
            </li> */}
          </ul>
        </nav>
      </div>
      <div className={`flex-1 ${isOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
        {/* Main Content */}
      </div>
    </div>
  );
};

export default Sidebar;
