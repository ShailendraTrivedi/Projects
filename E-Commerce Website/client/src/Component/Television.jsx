import React from 'react'
import Detailsbox from './Detailsbox';
import Televisioncards from '../Data/Televisioncards';
import {Laptopcard} from './Card';

const Television=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Television</h1>
                </div>
                <div>
                    {
                        Televisioncards.map((val) => {
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

export default Television;