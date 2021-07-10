import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import '../styles.css';
import { Cards } from '../pages/cards';

// Creamos una función para llamar la API
export const RickAndMorty = () => {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        
            Axios.get('https://rickandmortyapi.com/api/character').then((response) => {
        
                // Muestra en el log solo los resultados que necesitamos para las tarjetas
                console.log(response.data.results);
                setPersonajes(response.data.results);
        
            })
            .catch( err => {
                console.log(err);
            });
    }, []);

    

    return (

        <div>
            {
                personajes.map( ( chars, id) => {
                    return <Cards key={ id } chars={ chars } /> 
                })
            }
        </div>
        
    )
}

// TODO: Renderizar los campos en las cartas