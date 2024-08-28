const express = require("express");
const app = express();
const configureMiddleware = require("./middlewares");
const anime = require("./anime");
//const port = 3000;

// Apply middleware
configureMiddleware(app);

app.get("/", (req, res) => {
  res.send(
    JSON.stringify({
      message: "Up and Gratefull",
    })
  );
});

app.post("/anime", async (req, res) => {
  const animeUrl = req.body.animeUrl;

  try {
    const animeInfo = await anime(animeUrl);
    res.json(animeInfo);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Unrecognise Link, Check the link and try again!" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Up and running on port ${PORT}`);
});

//https://eng.cartoonsarea.cc/English-Dubbed-Series/G-Dubbed-Series/Golden-Time-Dubbed-Videos/
