const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  const studentList = [
    { firstName: "Sabeer", lastName: "Neyyan" },
    { firstName: "Anees", lastName: "T" },
    { firstName: "Jsim", lastName: "Ismail" },
  ];
  res.status(200).send(studentList);
});

app.listen(3000, () => console.log("sever connected"));
