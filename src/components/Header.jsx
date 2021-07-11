import React from 'react';

import  rick from '../images/rick.png';


export const Header = () => {


    return (
       
        <div id="carouselExampleControls" className="carousel slide d-flex" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={ rick } className="d-block w-100" alt="rick"/>
                </div>
            </div>
        </div>

    )
}
