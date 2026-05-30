import React, { useState } from 'react'
import SearchBar from './SearchBar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 z-10" style={{background:"linear-gradient(to right top,rgb(233,233,246),white,rgb(233,233,246))"}}>
        <SearchBar/>
        <div className="hidden md:flex items-center gap-2 ml-4">

          <button className="flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium text-sm" style={{background:"rgb(234,170,69)"}}>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Shine lines top */}
          <line x1="32" y1="2" x2="32" y2="10" />
          <line x1="50" y1="6" x2="45" y2="12" />
          <line x1="14" y1="6" x2="19" y2="12" />

          {/* Diamond outer shape */}
          <polygon points="8,26 18,16 46,16 56,26 32,58" />

          {/* Top horizontal line */}
          <line x1="8" y1="26" x2="56" y2="26" />

          {/* Top facet lines */}
          <line x1="18" y1="16" x2="24" y2="26" />
          <line x1="46" y1="16" x2="40" y2="26" />
          <line x1="32" y1="16" x2="32" y2="26" />

          {/* Bottom facet lines */}
          <line x1="8" y1="26" x2="32" y2="58" />
          <line x1="56" y1="26" x2="32" y2="58" />
          <line x1="24" y1="26" x2="32" y2="58" />
          <line x1="40" y1="26" x2="32" y2="58" />
          <line x1="32" y1="26" x2="32" y2="58" />
            </svg> Upgrade
          </button>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm font-medium"> <span className="font-bold text-sm">+</span> Create Campaign</button>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-2xl ml-4">
            <div className="w-6 h-6 rounded-full overflow-hidden cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  width="25"
                  height="25"
                >
                  <circle cx="20" cy="20" r="20" fill="#A8C4F5" />
                  <circle cx="20" cy="15" r="7" fill="#5B8DEF" />
                  <ellipse cx="20" cy="32" rx="11" ry="9" fill="#5B8DEF" />
                </svg>
              </div>
          <span onClick={()=>setMenuOpen(!menuOpen)}>☰</span>
        </div>
        {menuOpen && (
        <div className="md:hidden absolute top-[60px] right-4 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-3 z-50 border border-gray-100">
          <button className="flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium text-sm w-full justify-center"
            style={{background:"rgb(234,170,69)"}}>
            {/* diamond svg */}
            Upgrade
          </button>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm font-medium w-full">
            + Create Campaign
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar