import React from 'react';

import  morty from '../images/morty.jpg';
import  rick from '../images/rick.png';
import  rickMorty from '../images/rick-morty.jpg';


export const Header = () => {


    return (
       
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={ rick } className="d-block w-100" alt="rick"/>
                </div>
                <div className="carousel-item">
                <img src={ morty } className="d-block w-100" alt="morty"/>
                </div>
                <div className="carousel-item">
                <img src={ rickMorty } className="d-block w-100" alt="rick and morty"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
