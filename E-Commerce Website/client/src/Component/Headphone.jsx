import React from 'react'
import Detailsbox from './Detailsbox';
import Headphonecards from '../Data/Headphonecards';
import {Laptopcard} from './Card';

const Headphone=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Headphone</h1>
                </div>
                <div >
                    {
                        Headphonecards.map((val) => {
                            return (
                                <Laptopcard id={val.id} imgsrc={val.image} cname={val.name} list={val.list} price={val.price}></Laptopcard>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Headphone;