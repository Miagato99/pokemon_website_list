"use client";

import Link from 'next/link';
import { useState } from 'react';
import '../../styles/header.scss';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          Pokédex App 
        </Link>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search Pokémon..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="searchInput"
          />
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;