import { useState } from 'react';
import {
    AiFillCodeSandboxCircle, AiOutlineAppstore,
    AiOutlineLogout, AiOutlineMessage,
    AiOutlinePieChart, AiOutlineSetting,
    AiOutlineShopping, AiOutlineShoppingCart,
    AiOutlineUsergroupAdd
} from "react-icons/ai";
import { SiAccusoft } from "react-icons/si";
import { Section } from './styles';


export const SideBar = () => {
    const [currentLink, setCurrentLink] = useState(1);

    const mobile = window.innerWidth <= 768 ? true : false
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };


    return (
        <Section visible={menu}>
            {(!menu && mobile) ? (
                <button className="toggleButton" onClick={toggleMenu}>
                    Open Sidebar
                </button>
            ) :
                <>
                    {mobile && (
                        <button className="toggleButton" onClick={closeMenu}>
                            Close Sidebar
                        </button>
                    )}
                    <div className="top">
                        <div className="brand">
                            <AiFillCodeSandboxCircle />
                            <span>Sales Analytics</span>
                        </div>
                        <div className="links">
                            <ul>
                                <li
                                    className={currentLink === 1 ? "active" : "none"}
                                    onClick={() => setCurrentLink(1)}
                                >
                                    <a href="#">
                                        <AiOutlineAppstore />
                                        <span className="border">Dashboard</span>
                                    </a>
                                </li>
                                <li
                                    className={currentLink === 2 ? "active" : "none"}
                                    onClick={() => setCurrentLink(2)}
                                >
                                    <a href="#">
                                        <AiOutlineShoppingCart />
                                        <span className="border">Orders</span>
                                    </a>
                                </li>
                                <li
                                    className={currentLink === 3 ? "active" : "none"}
                                    onClick={() => setCurrentLink(3)}
                                >
                                    <a href="#">
                                        <AiOutlineShopping />
                                        <span className="border">Products</span>
                                    </a>
                                </li>
                                <li
                                    className={currentLink === 4 ? "active" : "none"}
                                    onClick={() => setCurrentLink(4)}
                                >
                                    <a href="#">
                                        <AiOutlinePieChart />
                                        <span className="border">Overview</span>
                                    </a>
                                </li>
                                <li
                                    className={currentLink === 5 ? "active" : "none"}
                                    onClick={() => setCurrentLink(5)}
                                >
                                    <a href="#">
                                        <AiOutlineUsergroupAdd />
                                        <span className="border">Customers</span>
                                    </a>
                                </li>
                                <li
                                    className={currentLink === 6 ? "active" : "none"}
                                    onClick={() => setCurrentLink(6)}
                                >
                                    <a href="#">
                                        <AiOutlineMessage />
                                        <span className="border">Message</span>
                                    </a>
                                </li>
                                <li
                                    className={currentLink === 7 ? "active" : "none"}
                                    onClick={() => setCurrentLink(7)}
                                >
                                    <a href="#">
                                        <AiOutlineSetting />
                                        <span className="border">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div><div className="map">
                        <SiAccusoft />
                        <span>Unlock more information<br></br>
                            now ! Upgrade to <strong>PRO</strong>
                        </span>
                    </div><div className="logout">
                        <a href="#">
                            <AiOutlineLogout />
                            <span>Logout</span>
                        </a>
                    </div></>

            }
        </Section>
    )
}

    ;