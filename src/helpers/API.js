import Axios from 'axios';

// Creamos una función para llamar la API
export const rickAndMorty = () => {

    Axios.get('https://rickandmortyapi.com/api/character').then((response) => {

        console.log(response);

    });
}