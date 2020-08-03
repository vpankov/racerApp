import config from 'src/config';

const URL = `${config.API_BASE_URI}`;

export const getSeasons = () => fetch(`${URL}/seasons.json`)
export const getSeasonDetails = (year) => fetch(`${URL}/${year}.json`)
export const getRaces = () => fetch(`${URL}`)

