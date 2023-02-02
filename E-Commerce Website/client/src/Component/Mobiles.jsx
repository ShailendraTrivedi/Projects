import React from 'react';
import Card from './Card';
import Mobilescards from '../Data/Mobilescards';
import Detailsbox from './Detailsbox';



const Mobiles = () => {

   



    return (
        <>
            <Detailsbox></Detailsbox>

            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Mobiles</h1>
                </div>
                <div >
                    {
                        Mobilescards.map((val) => {
                            return (
                                <Card id={val.id} imgsrc={val.image} cname={val.name} list={val.list} price={val.price}></Card>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Mobiles;