import React from 'react'
import './../CSS/home.css';
import CardsCategory from './CardsCategory';
import Detailsbox from './Detailsbox';


const Home = () => {
    return (
        <>
        {/* -----------------------------------------  Product List ------------------------------------------------- */}
            <Detailsbox></Detailsbox>
        {/* -----------------------------------------  Cards ------------------------------------------------- */}

        <div className="cardsdetails">
            <CardsCategory></CardsCategory>
        </div>








        </>
    );
}

export default Home;