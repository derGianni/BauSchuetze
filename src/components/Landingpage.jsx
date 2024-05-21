import React from "react";
import background from "../assets/hintergrund-test.mp4";

const Landingpage = () => {
    return(
        <>
            <video src={background} className="w-screen h-screen object-cover flex" />
            <div className="flex justify-center">
                <h1 className="top-[35%] absolute text-center text-white text-[75px]">
                    DER TRADITION UND DEM <br/>FACHWISSEN VERPFLICHTET
                </h1>
                <div className="top-[90%] absolute animate-bounce w-14 h-12 pl-2 flex cursor-pointer">
                    <div className="ml-8 absolute w-1 h-12 bg-black rotate-45 bg-white"/>
                    <div className="mr-8 absolute w-1 h-12 bg-black -rotate-45 bg-white"/>
                </div>
            </div>
        </>
    );
}

export default Landingpage