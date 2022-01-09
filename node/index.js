const querystring = require("querystring");
const SpotifyWebApi = require("spotify-web-api-node");
const request = require("request");
const express = require("express");
const axios = require("axios");
const http = require("http");

const app = express();
const server = http.createServer(app);

const client_id = "05a989b892cc41cebfdcecd2d217438e";
const client_secret = "45bad353eb054131894c35868f1a8029";
const redirect_uri = "http://localhost:3005/spotify/callback";

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

app.get("/spotify/login", (req, res) => {
  var scopes = ["user-top-read", "user-read-currently-playing"];

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scopes,
        redirect_uri: redirect_uri,
      })
  );
});

app.get("/spotify/callback", (req, res) => {
  const { code } = req.query;

  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    console.log(body.access_token, body.refresh_token);
  });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

io.on("connection", async (socket) => {
  socket.on("spotifypause", async (status) => {
    console.log("status");
    await axios({
      url: "https://api.spotify.com/v1/me/player/pause",
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQB46jbtq-yxktUC_qSbBSbNOHUTh25_vuKRUO7uLs43w5kUhfei3hBxBL3LXsTDDW3lSxslseYBXCYJJJrS78yg-TmCLIG8aZeudYVsvVSF7K3ot_Uz-VeMXgGafjqWGWzLP8w-4m2TKMvoaqSGkBaB2diS8ifH43Wq3STXyz0pjhY",
      },
    })
      .then((e) => {})
      .catch((e) => {});
  });

  // setInterval(async () => {
  //   await axios
  //     .get("https://api.spotify.com/v1/me/player/currently-playing", {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer BQC-ykmwDijZxVFJXlWk2Y4vzmrtKw7ioi457o1ni0sNW_CQeywBnuhmteJQojLP-47yNoWquJGpNWFCrj8gz7HZuux-JKFJzlrcB5htWZ4YqnYXjCHChbBs6y4L8z417GjoVJQ8hm7I4uJVP1EQ6WgimkhxaiEeir88fg",
  //       },
  //     })
  //     .then((e) => {
  //       socket.emit("spotifyCurrently", {
  //         status: "ok",
  //         title: e.data.item.name,
  //         artist: e.data.item.artists[0].name,
  //         cover: e.data.item.album.images[0],
  //         preview: e.data.item.preview_url,
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, 30000);
});

app.get("/spotify/currently", async (req, res) => {
  axios
    .get("a ", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQB46jbtq-yxktUC_qSbBSbNOHUTh25_vuKRUO7uLs43w5kUhfei3hBxBL3LXsTDDW3lSxslseYBXCYJJJrS78yg-TmCLIG8aZeudYVsvVSF7K3ot_Uz-VeMXgGafjqWGWzLP8w-4m2TKMvoaqSGkBaB2diS8ifH43Wq3STXyz0pjhY",
      },
    })
    .then((e) => {
      return res.status(200).send({
        status: "ok",
        title: e.data.item.name,
        artist: e.data.item.artists[0].name,
        cover: e.data.item.album.images[0],
        preview: e.data.item.preview_url,
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

app.get("/spotify", async (req, res) => {
  axios
    .get(
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1&offset=0",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer BQB46jbtq-yxktUC_qSbBSbNOHUTh25_vuKRUO7uLs43w5kUhfei3hBxBL3LXsTDDW3lSxslseYBXCYJJJrS78yg-TmCLIG8aZeudYVsvVSF7K3ot_Uz-VeMXgGafjqWGWzLP8w-4m2TKMvoaqSGkBaB2diS8ifH43Wq3STXyz0pjhY",
        },
      }
    )
    .then((e) => {
      return res.status(200).send({
        status: " ok",
        cached: "false",
        title: e.data.items[0].name,
        artist: e.data.items[0].album.artists[0].name,
        cover: e.data.items[0].album.images[0],
        preview: e.data.items[0].preview_url,
      });
    })
    .catch((e) => {
      res.status(200).send({
        status: " ok",
        cached: "true",
        title: "Stupid Heart",
        artist: "Phazzze",
        cover: {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27387cb8dea58c7b82f35355108",
          width: 640,
        },
        preview:
          "https://p.scdn.co/mp3-preview/606e7769ea7056045e36fe66b18c97b2f97961e4?cid=774b29d4f13844c495f206cafdad9c86",
      });
    });
});

app.get("/github/:url/", async (req, res) => {
  const { url } = req.params;
  await axios
    .get(`https://api.github.com/repos/vonweinkeller/${url}/commits`, {
      headers: {
        Authorization: "token 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",
      },
    })
    .then((e) => {
      return res.status(200).send({
        status: "ok",
        committer: e.data[0].commit.committer.name,
        message: e.data[0].commit.message,
        date: e.data[0].commit.committer.date,
        url: e.data[0].html_url,
      });
    })
    .catch((er) => {});
});

server.listen(3005, () => {
  console.log("running");
});
