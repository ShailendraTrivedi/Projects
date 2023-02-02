import React from 'react'
import Detailsbox from './Detailsbox';
import {Food} from '../Data/Beautycards';
import {Foodcard} from './Card';

const Foodpage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Foods </h1>
                </div>
                <div >
                    {
                        Food.map((val) => {
                            return (
                                <Foodcard price={val.price} id={val.id} imgsrc={val.image} cname={val.name} list={val.list}></Foodcard>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Foodpage;