"use client";
import Link from "next/link";
import "../../styles/header.scss";
import Image from "next/image";
import { HomeIcon, PokemonLogo } from "@/assets";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <Image src={PokemonLogo} alt ="Pokemon Logo"width={161} height={86} />
        </Link>
        <nav className="nav">
          <Link href="/">
            <Image src={HomeIcon} alt="Home Icon" width={30} height={30} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
