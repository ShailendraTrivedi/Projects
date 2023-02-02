import React from 'react'
import Detailsbox from './Detailsbox';
import Microwavecard from '../Data/Microwavecard';
import {Laptopcard} from './Card';

const Microwave=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Microwave</h1>
                </div>
                <div>
                    {
                        Microwavecard.map((val) => {
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

export default Microwave;