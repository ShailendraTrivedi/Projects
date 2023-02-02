import React from 'react'
import Detailsbox from './Detailsbox';
import Chimneycards from '../Data/Chimneycards';
import {Laptopcard} from './Card';

const Chimney=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Chimney</h1>
                </div>
                <div>
                    {
                        Chimneycards.map((val) => {
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

export default Chimney;