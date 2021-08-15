import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="navigation">
                <ul>
                    <li><NavLink to="/main" activeClassName="active">MAIN</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
                    <li><NavLink to="/gallery" activeClassName="active">GALLERY</NavLink></li>
                    <li><NavLink to="/pricing" activeClassName="active">PRICING</NavLink></li>
                    <li><NavLink to="/faq" activeClassName="active">FAQ</NavLink></li>
                    <li><NavLink to="/benefits" activeClassName="active">BENEFITS</NavLink></li>
                </ul>
            </div>
            <div className="auth">
            <NavLink to="/signin"><button className="sign__in">Sign In</button></NavLink>
            <NavLink to="/signup"><button className="sign__up">Sign Up</button></NavLink>
            </div>
        </div>
    )
}