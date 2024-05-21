import React, {Component, useEffect, useRef, useState} from 'react'
import kontakt from "../assets/kontakt.jpg";
import { ImLocation2 } from "react-icons/im";
import { BsCalendarCheckFill } from "react-icons/bs";
import {Header} from "./index";
import ReferencesDetails from "./ReferencesDetails";
import { referenzen } from "../constants/referenzen"
import Reference from "./Reference";
import {referenz, referenz2, referenz3} from "../assets";
import axios from 'axios';
import {useParams} from "react-router-dom";

const References = () => {

    const [state, setState] = useState({
        references: [],
        isLoaded: false,
        idDetails: null,
    });

    const pId = useParams();

    useEffect(() => {
        if(!state.isLoaded){
        axios.get(`/wp-json/wp/v2/referenzen`)
            .then(res => {
                setState({
                    references: res.data,
                    isLoaded: true
                });
            })
            .catch(err => console.log(err));
    }
        }, []);
    if (state.isLoaded) {
        return (
            <>
                <Header text="Referenzen" background={kontakt}/>
                <Main references={state.references} pId={pId.id}/>
            </>
        );
    }

    return (
        <>
            <Header text="Referenzen" background={kontakt}/>
        </>
    );
}

export default References;

const Main = ({references, pId}) => {

    const myRef = useRef(null);

    useEffect(() => {
        if (myRef.current) {
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [myRef]);

    return(
        <div className="bg-gray-100 h-screen w-full">
            <div className="flex gap-14 flex-wrap justify-center">
                {references.map((reference, id) => (
                    pId == id ? (
                        <ReferencesDetails ref={myRef} reference={reference}/>
                    ) : (
                        <Reference key={id} id={id} reference={reference}/>
                    )


                    ))}
            </div>
        </div>
    );
}