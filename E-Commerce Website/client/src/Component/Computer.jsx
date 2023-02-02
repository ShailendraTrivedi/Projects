import React from 'react'
import Detailsbox from './Detailsbox';
import {PCcards } from '../Data/PCgamingcards';
import {Laptopcard} from './Card';

const Computer=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Computer</h1>
                </div>
                <div>
                    {
                        PCcards.map((val) => {
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

export default Computer;