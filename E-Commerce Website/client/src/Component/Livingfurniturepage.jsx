import React from 'react'
import Detailsbox from './Detailsbox';
import {Livingfurniture} from '../Data/Homedecorcards';
import {Laptopcard} from './Card';

const Livingfurniturepage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Living Furniture</h1>
                </div>
                <div>
                    {
                        Livingfurniture.map((val) => {
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

export default Livingfurniturepage;