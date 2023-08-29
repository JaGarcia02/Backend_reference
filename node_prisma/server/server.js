const express = require("express");
const app = express();
const port = 3000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  return res.status(200).json(allUsers);
});
app.post("/", async (req, res) => {
  const newUser = await prisma.user.create({ data: req.body });
  return res.status(200).json(newUser);
});
app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const newAge = req.body.age;
  const updateUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { age: newAge },
  });
  return res.status(200).json(updateUser);
});
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  return res
    .status(200)
    .json({ message: "User Deleted!", response: deletedUser });
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const userProfile = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  return res.status(200).json(userProfile);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
