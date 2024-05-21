import React from "react";
import {ImLocation2} from "react-icons/im";
import {BsCalendarCheckFill} from "react-icons/bs";
import {Link} from "react-router-dom";


const Reference = ({id, reference}) => {

    const title = reference.title.rendered;
    const location = reference.acf.ort;
    const jear = reference.acf.baujahr;
    const imageURL = reference.acf.bild.url;
    const link = '/referenzen/' + id;

    return (
        <Link className={"z-20"} to={link} >
        <div className="relative w-72 h-72 bg-white top-10 rounded-xl shadow-lg">
            <img src={imageURL} className="p-2 rounded-xl h-[185px] m-auto object-cover"/>
            <h1 className="font-serif font-bold  m-2">{title}</h1>
            <div className="flex">
                <div className="ml-3 flex bg-blue-100 rounded-xl w-min px-2 my-1">
                    <ImLocation2 className="mt-1 w-4 h-4"/>
                    <h1 className="font-serif pl-2">{location}</h1>
                </div>
                <div className="ml-3 flex bg-blue-100 rounded-xl w-min px-2 my-1">
                    <BsCalendarCheckFill className="mt-1 w-4 h-4"/>
                    <h1 className="font-serif pl-2">{jear}</h1>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default Reference;