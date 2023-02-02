import React from 'react'
import Detailsbox from './Detailsbox';
import {Gamingcards } from '../Data/PCgamingcards';
import {Laptopcard} from './Card';

const Gaming=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Gaming</h1>
                </div>
                <div>
                    {
                        Gamingcards.map((val) => {
                            return (
                                <Laptopcard price={val.price} id={val.id} imgsrc={val.image} cname={val.name} list={val.list}></Laptopcard>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Gaming;