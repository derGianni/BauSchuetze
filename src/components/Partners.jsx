import { Partner, Header } from './index'
import { Component } from 'react'
import axios from 'axios';
import { kontakt } from '../assets/index'
import React from 'react'

export class Partners extends Component {
    state = {
        partners: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('/wp-json/wp/v2/partner')
            .then(res => this.setState({
                partners: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {
        const {partners, isLoaded} = this.state;
        if(isLoaded){
            return(
                <>
                    <Header text="Partner" background={kontakt}/>
                    <Main partners={partners}/>
                </>
            );
        }

        return (
            <>
                <Header text="Referenzen" background={kontakt}/>
            </>
        );
    }
}
export default Partners;


const Main = ({partners}) => {

    return(
        <div className="bg-gray-100 h-screen w-full">
            <div className="flex gap-14 flex-wrap justify-center">
                {partners.map(partner => (
                    <Partner id={partner.id} partner={partner}/>
                ))}
            </div>
        </div>
    );
}