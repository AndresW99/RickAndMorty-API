import React from 'react';
import '../styles.css';


export const Cards = ( props ) => {


    return (
        
        <div className="card border-info bg-secondary mb-3 estilo animate__animated animate__fadeInLeft">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={ props.chars.image } className="img-fluid card-img-top rounded-start" alt="Rick and morty" />
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                    <h3 className="card-title text-warning">{ props.chars.name }</h3>
                    <h6>{ <b>Especie</b> }: { props.chars.species }</h6>
                    <h6>{ <b>Estatus</b> }: { props.chars.status }</h6>
                    <h6>{ <b>Genero</b> }:  { props.chars.gender }</h6>
                    </div>
                </div>
            </div>
        </div>

    )
}