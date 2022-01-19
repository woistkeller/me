import axios from "axios";

const url = {
  production: "https://caian.herokuapp.com",
  development: "http://localhost:3005",
};

// add later cancel fetch

const api = {
  lichessGet: async function () {
    return await axios.get(`${url.production}/lichess`).then((e) => {
      return e.data;
    });
  },
  spotifyGet: async function () {
    return await axios.get(`${url.production}/spotify`).then((e) => {
      return e.data;
    });
  },
  githubGet: async function (gitName) {
    return await axios.get(`${url.production}/github/${gitName}/`).then((e) => {
      return e.data;
    });
  },
};

export default api;
