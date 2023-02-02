import React from 'react'
import Detailsbox from './Detailsbox';
import Accards from '../Data/Accards';
import {Laptopcard} from './Card';

const Ac=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Air Conditioner</h1>
                </div>
                <div>
                    {
                        Accards.map((val) => {
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

export default Ac;