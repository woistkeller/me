import axios from "axios";

const url = {
  production: "https://caian.herokuapp.com",
  development: "http://localhost:3005",
};

// add later cancel fetch

const api = {
  lichessGet: async function () {
    return await axios
      .get(`${url.development}/lichess`)
      .then((e) => {
        return e.data;
      })
      .catch((er) => {
        return "error";
      });
  },
  spotifyGet: async function () {
    return await axios
      .get(`${url.development}/spotify`)
      .then((e) => {
        return e.data;
      })
      .catch((er) => {
        return "error";
      });
  },
  githubGet: async function (gitName) {
    return await axios.get(`${url.development}/github/${gitName}`).then((e) => {
      return e.data;
    });
  },
};

export default api;
