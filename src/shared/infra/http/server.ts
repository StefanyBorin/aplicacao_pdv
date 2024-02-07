import express from "express";

const app = express();
const port = process.env.SERVER_PORT || 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});