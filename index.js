import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World from jessekerch!"));

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:3000`)
);

export default app;
