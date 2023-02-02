import React from 'react'
import Detailsbox from './Detailsbox';
import {Fitness} from '../Data/Beautycards';
import {Laptopcard} from './Card';

const Fitnesspage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Fitness </h1>
                </div>
                <div >
                    {
                        Fitness.map((val) => {
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

export default Fitnesspage;