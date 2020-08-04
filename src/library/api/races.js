import config from 'src/config';

const URL = `${config.API_BASE_URI}`;

export const getRacers = (page) =>
  fetch(
    `${URL}/drivers.json?limit=${config.PAGINATION_SIZE}&offset=${
      config.PAGINATION_SIZE * page
    }`,
  );

export const getRacer = (id) => fetch(`${URL}/drivers/${id}.json`);

export const getRaces = (id, page) =>
  fetch(
    `${URL}/drivers/${id}/results.json?limit=${config.PAGINATION_SIZE}&offset=${
      config.PAGINATION_SIZE * page
    }`,
  );
