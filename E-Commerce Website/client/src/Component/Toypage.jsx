import React from 'react'
import Detailsbox from './Detailsbox';
import {Toy} from '../Data/Beautycards';
import {Laptopcard} from './Card';

const Toypage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Toy </h1>
                </div>
                <div >
                    {
                        Toy.map((val) => {
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

export default Toypage;