import React from "react";
import './Footer.css'; 

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__title">POWERED BY NHTSA API</p>
                <p className="footer__subtitle">A minimalist tool for automotive data exploration</p>
            </div>
        </footer>
    );
}

export default Footer;