const express = require("express");
const app = express();
const url = require("url");
const cors = require("cors");
const { cards } = require("./cards.json");
const port = process.env.PORT || 3030;

app.use(cors());

app.get("/api/cards", (req, res) => {
  const url_parts = url.parse(req.url, true);
  const query = url_parts.query;
  const { limit = 20, name = "", type = "" } = query;

  if (!name && !type) {
    return res.json({
      data: cards.slice(0, limit),
      limit,
    });
  }

  const filter = cards.filter(
    (item) =>
      item.name.toLowerCase().indexOf(name.toLowerCase()) > -1 ||
      item.type.toLowerCase().indexOf(type.toLowerCase()) > -1
  );

  return res.json({
    data: filter,
    limit: filter.length,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
