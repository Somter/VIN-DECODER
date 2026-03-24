import React from "react";
import { Link } from "react-router-dom"; 
import CarLogo from '../../assets/car_logo_icon.svg';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__inner">

                <Link to="/" className="header__logo">
                    <img src={CarLogo} alt="VIN Decoder Logo" className="header__logo-icon" />
                    <span className="header__logo-text">
                        <strong>VIN</strong>DECODER
                    </span>
                </Link>

                <nav className="header__nav">
                    <Link to="/" className="header__link">Home</Link>
                    <Link to="/variables" className="header__link">Variables</Link>
                </nav>

            </div>
        </header>
    );
}

export default Header;