import React from 'react';
import '../styles.css';


export const Cards = ( props ) => {


    return (

    <div className="card border-success bg-secondary mb-3 estilo card-group">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={ props.chars.image } className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h3 className="card-title card-header">{ props.chars.name }</h3>
                <h6>{ <b>Especie</b> }: &nbsp; { props.chars.species }</h6>
                <h6>{ <b>Estatus</b> }: &nbsp; { props.chars.status }</h6>
                <h6>{ <b>Genero</b> }: &nbsp; { props.chars.gender }</h6>
                </div>
            </div>
        </div>
    </div>

    )
}