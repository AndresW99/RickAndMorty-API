import React from 'react';
import '../styles.css';
import { rickAndMorty } from '../helpers/API';

export const Cards = () => {

    const handleClick = () => {

        console.log(rickAndMorty());

    }

    return (

        <div className="card mb-3 estilo">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Aquí se mostrara la descripción de la API de Rick and Morty. PD: Me quedo mamalona la tarjeta</p>
                    <button className="btn btn-primary" onClick={ handleClick }>Call API</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
