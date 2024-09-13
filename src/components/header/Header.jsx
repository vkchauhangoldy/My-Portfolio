
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css"
import logo from "../../assets/vk.jpg"

const Header = () => {
    const headers = [
        {
            path: "/", name: "Home"
        },
        {
            path: "/about", name: "About"
        },
        {
            path: "/project", name: "Projects"
        },
        {
            path: "/contact", name: "Contact"
        },
    ]
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <>
            <div>
                <div className={click ? "main-container" : ""} onClick={() => Close()} />
                <nav className="navbar fixed-top" onClick={e => e.stopPropagation()}>
                    <div className="nav-container">
                        <ul>
                            <NavLink exact to="/" className="nav-logo font-bold">
                                <img src={logo} alt="Mr.Goldy" className="logo" height={40} />
                                <div> <span className="txt-primary ">Vin</span><span className="txt-secondary">ay</span></div>
                            </NavLink>
                        </ul>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            {
                                headers.map((data, i) => (
                                    <li key={i} className="nav-item">
                                        <NavLink exact
                                            to={data.path}
                                            activeClassName="active"
                                            className="nav-links"
                                            onClick={click ? handleClick : null}>{data.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>

    )
}

export default Header
