import React, {useEffect, useRef, useState} from 'react'
import kontakt from "../assets/kontakt.jpg";
import {Header} from "./index";
import ReferencesDetails from "./ReferencesDetails";
import Reference from "./Reference";
import axios from 'axios';
import {useParams} from "react-router-dom";

const References = () => {

    //States
    const [state, setState] = useState({
        references: [],
        isLoaded: false,
        idDetails: null,
    });

    //Parameter from the URL
    const pId = useParams();


    //Reading the References using axios
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

    //Returning the Page if everything is loaded
    if (state.isLoaded) {
        return (
            <>
                <Header text="Referenzen" background={kontakt}/>
                <Main references={state.references} pId={pId.id}/>
            </>
        );
    }
    //Returns only the Header if something is not loaded
    return (
        <>
            <Header text="Referenzen" background={kontakt}/>
        </>
    );
}

export default References;

//--------------------Page Body--------------------
const Main = ({references, pId}) => {

    //Define variables
    const [row, setRow] = useState([[]]);

    //Scroll into View effect
    const myRef = useRef(null);
    useEffect(() => {
        if (myRef.current) {
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        //Add event listener for window resize
        window.addEventListener('resize', fillRows);
        fillRows();
    }, [myRef]);


    const fillRows = () => {
        const  itemsPerRow = parseInt(window.innerWidth / 340);
        console.log(itemsPerRow);
        setRow([[]]);
        const newRow = [];
        let index = 0;

        for(let j = 0; j < (references.length / itemsPerRow); j++) {
            const rowItem = [];

            for(let i = 0; i < itemsPerRow; i++) {
                if(index >= references.length) break;
                rowItem.push(<Reference key={index} id={index} reference={references.at(index)} />);
                index++;
            }
            newRow.push(rowItem);

            if(index > references.length) break;

            if(index == pId) {
                console.log("test");
                const rowItem = [];
                rowItem.push(<ReferencesDetails reference={references.at(index)} />);
                newRow.push(rowItem);
            }

        }

        console.log(newRow);
        setRow(newRow);
        console.log(row);

    }

    //Returns all the References
    return(
        <div className="bg-gray-100 h-screen w-full">
            {row.map((element, id) => (
                <div className="flex gap-14 justify-center py-7">
                    {
                        element.map((widget, id2) => (
                            widget
                        ))
                    }
                </div>
            ))}
        </div>
    );
}