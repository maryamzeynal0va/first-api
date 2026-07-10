const express = require("express");

const app = express();
const PORT = 3000;

// First endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Hello, Backend!"
  });
});

// Second endpoint
app.get("/about", (req, res) => {
  res.json({
    name: "Maryam",
    course: "Backend AI Engineering"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
