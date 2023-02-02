import React from 'react'
import Detailsbox from './Detailsbox';
import Fridgecards from '../Data/Fridgecards';
import {Fridgecard} from './Card';

const Refrigrator=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Refrigrator</h1>
                </div>
                <div>
                    {
                        Fridgecards.map((val) => {
                            return (
                                <Fridgecard price={val.price} id={val.id} imgsrc={val.image} cname={val.name} list={val.list}></Fridgecard>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Refrigrator;