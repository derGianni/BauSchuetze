import React from "react";
import {BsFacebook} from "react-icons/bs";
import {instagram, mail} from "../assets/index"
import {Navbar} from "./index";

const Header = ({text, background}) => {
    return(
        <>
            <div className="w-full h-[420px] bg-gray-700">
                <img src={background} className="w-full h-[420px] object-cover"/>
                <div className="bg-gradient-to-b from-gray-950 to-transparent absolute top-0 w-full h-52"> </div>
                <div className="bg-gradient-to-b from-transparent to-gray-950 absolute top-40 w-full h-[16.3rem]"></div>
                <h1 className="text-white text-7xl w-full text-center absolute top-60 font-serif">{text}</h1>
                <div className="flex justify-center absolute top-[22rem] w-full">
                    <BsFacebook  color="#4267B2" className="w-10 h-10 my-1.5 mx-4 cursor-pointer" />
                    <img src={instagram} className="w-10 h-10 mx-4 my-1.5 cursor-pointer"/>
                    <img src={mail}  className="w-10 h-10 mx-4 my-1.5 cursor-pointer"/>
                </div>
            </div>
            <div>
                <Navbar/>
            </div>
        </>
    );
}

export default Header