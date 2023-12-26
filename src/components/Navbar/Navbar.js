import airbnbLogo from "../../assests/airbnb.svg"
import searchIcon from "../../assests/searchIcon.png"
import search from "../../assests/searchIcon.svg"
import languageIcon from "../../assests/languageIcon.png"
import profileIcon from "../../assests/profileIcon.svg"
import hamburger from "../../assests/hamburger.svg"
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="airbnbLogo">
            <img src={airbnbLogo} alt='logo'/>
            </div>
            {/* <div className="search-buttons">
                <button>Anywhere</button>
                <button>Anyweek</button>
                <button>Add Guests</button>
            </div>
            <div className="profile">
                <span>Airbnb your Home</span>
                <img src={languageIcon} alt='Change Language' className="language-icon"/>
                <div className="menu">
                    <img src={hamburger} alt="menu"/>
                    <img src={profileIcon} alt="Profile Icon"/>
                </div>
            </div> */}
        </nav>
    );
}