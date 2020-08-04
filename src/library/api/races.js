import config from 'src/config';

const URL = `${config.API_BASE_URI}`;

export const getRacers = (page) => 
    fetch(`${URL}/drivers.json?limit=${config.PAGINATION_SIZE}&offset=${config.PAGINATION_SIZE * page}`)

export const getSeasonDetails = (year) => fetch(`${URL}/${year}.json`)
export const getRaces = () => fetch(`${URL}`)

