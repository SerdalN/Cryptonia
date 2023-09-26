import {useRef} from "react";
import {FaBars, FaTimes, FaDiscord, FaTwitter} from "react-icons/fa"
import "../Styles/NavBar.css";

function NavBar() {
     const navRef = useRef();

     const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
     }
        return (
            <header>
                <h2>CRYPTONIA</h2>
                <nav ref = {navRef}>
                    <a href="/">Home</a>
                    <a href="/">Market</a>
                    <a href="/">Choose Us</a>
                    <a href="/">Join</a>
                        
                    <button className = "nav-btn nav-close-btn"onClick={showNavBar}>
                        <FaTimes/>
                    </button>
                </nav>
                        <div className="social--icons">
                        <a target="_blank" href="https://discord.com"><FaDiscord/></a>
                        <a target="_blank" href="https://twitter.com"><FaTwitter/></a>
                        </div>
                       
                <button className = "nav-btn" onClick={showNavBar}>
                    <FaBars/>
                </button>
            </header>

        );
    
}
 
export default NavBar;