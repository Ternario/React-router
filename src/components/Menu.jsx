import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            {/* <NavLink className={({ isActive }) => (isActive ? "activeLink" : "link")} to="/">
                Home
            </NavLink> */}
            {/* <NavLink
                style={({ isActive }) => (isActive ? { color: "lightyellow", textDecoration: "none" } : {})}
                to="/"
            >
                Home
            </NavLink> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/courses">Courses</NavLink>
        </nav>
    );
};

export default Menu;
