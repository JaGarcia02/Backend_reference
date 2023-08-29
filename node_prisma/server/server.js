const express = require("express");
const app = express();
const port = 3000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

app.get("/user", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  return res.status(200).json(allUsers);
});
app.post("/user", async (req, res) => {
  const newUser = await prisma.user.create({
    data: req.body,
  });
  return res.status(200).json(newUser);
});
app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const newAge = req.body.age;
  const updateUser = await prisma.user.update({
    where: { id: id },
    data: { age: newAge },
  });
  return res.status(200).json(updateUser);
});
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await prisma.user.delete({
    where: { id: id },
  });
  return res
    .status(200)
    .json({ message: "User Deleted!", response: deletedUser });
});
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const userProfile = await prisma.user.findUnique({
    where: { id: id },
  });
  return res.status(200).json(userProfile);
});
app.post("/house", async (req, res) => {
  const newHouse = await prisma.house.create({ data: req.body });
  return res.status(200).json(newHouse);
});
app.post("/house/many", async (req, res) => {
  const newHouse = await prisma.house.createMany({ data: req.body });
  return res.status(200).json(newHouse);
});
app.get("/house", async (req, res) => {
  const allHouse = await prisma.house.findMany({
    include: { owner: true, builtBy: true },
  });
  return res.status(200).json(allHouse);
});
app.get("/house", async (req, res) => {
  const address = req.body.address;
  const allHouse = await prisma.house.findUnique({
    where: { address: address },
    include: { owner: true, builtBy: true },
  });
  return res.status(200).json(allHouse);
});
app.get("/house/filtered", async (req, res) => {
  const address = req.body.address;
  const allHouse = await prisma.house.findMany({
    where: {
      wifiProvider: { not: null },
      owner: {
        age: {
          gte: 22,
        },
      },
    },
    orderBy: [
      {
        owner: {
          firstName: "desc",
        },
      },
    ],
    include: { owner: true, builtBy: true },
  });
  return res.status(200).json(allHouse);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
