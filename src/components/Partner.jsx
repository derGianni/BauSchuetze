import React, { Component } from 'react'
import {ImLocation2} from "react-icons/im";
import {BsCalendarCheckFill} from "react-icons/bs";

const Partner = ({id, partner}) => {
    console.log(partner)
    const link = partner.acf.url;
    const imageURL = partner.acf.bild.url;

    return (
        <div className="relative w-[260px] h-[260px] bg-white top-10 rounded-xl shadow-lg">
            <a href={link} target="_blank">
            <img src={imageURL} className="rounded-xl h-[250px] w-[250px] m-[5px] object-cover"/>
            </a>
            </div>
    );

}

export default Partner
