import {React, useState} from "react";
import {Navbar, Header} from "./index"
import kontakt from "../assets/kontakt.jpg"
import { BsInstagram,BsFacebook } from "react-icons/bs"
import instagram from "../assets/instagram-logo.png"
import mail from "../assets/email.svg"
import { ReactBingmaps } from 'react-bingmaps';

const Kontakt = () => {
    return (
        <>
            <Header text="Kontakt" background={kontakt}/>
            <Main />
        </>
    );
}

export default Kontakt;

const Main = () => {

    const bingMapsKey = 'Av9fAsu2_zMBWllT4ybaKIbKRUSF8zw5VfXxAAx02H7jaD5EUbZw5MtzMKXb0or2';

    const mapConfig = {
        credentials: bingMapsKey,
        center: [47.664089, 9.495175],
        zoom: 10,
    };

    const pushPins = [
    {
        location: [47.664089, 9.495175],
        option: { color: 'red'},
        title: 'Bau Schütze',
    },
];

    return(
        <div className="flex justify-around mt-20 flex-wrap gap-10">
            <div className="pt-7">
                <div className="kontaktzeile">
                    <h2 className="text-2xl font-Georgia">Schütze GmbH - Bauunternehmen</h2>
                </div>
                <div className="kontaktzeile">
                    Telefon: <a href="tel:+49754174872" className="text-red-800">+49 (0)7541 74872</a>
                </div>
                <div className="kontaktzeile">
                    Fax: <a href="fax:+4975413786491" className="text-red-800">+49 (0)7541 3786491</a>
                </div>
                <div className="kontaktzeile">
                    Adresse: <a href="https://maps.app.goo.gl/pbDy6cg46yahk1Pu9" target="_blank" className="text-red-800">Barbarossastraße 43, 88046 Friedrichshafen</a>
                </div>
                <div className="kontaktzeile">
                    Email: <a href="mailto:info@bau-schuetze.de" className="text-red-800">info@bau-schuetze.de</a>
                </div>
            </div>

            <div className={"w-[450px] h-[250px] bg-gray-400 rounded-xl"}>
                <ReactBingmaps
                    bingmapKey={bingMapsKey}
                    center={mapConfig.center}
                    zoom={mapConfig.zoom}
                    pushPins={pushPins}
                />
            </div>

        </div>
    );
}
