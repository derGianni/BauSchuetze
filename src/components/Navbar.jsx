import React from "react";
import logo from "../assets/logo-rot-weis.png"
import {navLinks} from "../constants";
import {useState} from "react";
import {Link} from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return(
        <div className="w-full flex justify-between absolute top-0">
            <Link className={"z-20"} to="/">
                <img src={logo} className="w-48 p-5" />
            </Link>

            <GiHamburgerMenu color={"white"} className={`${toggle ? 'hidden' : 'absolute'} hover:h-10 hover:w-10 hover:top-9 hover:right-9 top-10 right-10 w-8 h-8 absolute csm:hidden z-30`} onClick={() => setToggle((prev) => !prev)}/>
            <IoCloseSharp color={"white"} className={`${toggle ? 'absolute' : 'hidden'} hover:h-12 hover:w-12 hover:top-9 hover:right-9 top-10 right-10 w-10 h-10 absolute csm:hidden z-30`} onClick={() => setToggle((prev) => !prev)}/>

            <ul className="hidden csm:flex items-center pr-5 text-white text-xl font-Visby z-10">
                {navLinks.map((nav, index) => (
                    <li key={`${nav.id}`}>
                        <Link to={`${nav.id}`} className="px-3">
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className={`${toggle ? 'flex' : 'hidden'} h-[420px] w-screen justify-center items-center absolute backdrop-blur`} onClick={() => setToggle((prev) => !prev)}>
                <ul className="pt-24 text-white text-xl font-Visby z-10">
                    {navLinks.map((nav, index) => (
                        <li key={`${nav.id}`} className={"py-1"}>
                            <Link to={`${nav.id}`}>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar