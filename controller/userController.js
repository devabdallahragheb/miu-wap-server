const userServices = require("../services/userServices");
exports.createUser = async (req, res) => {
  try {
    console.log("welcome to create user" + JSON.stringify(req.body));

    const user = await userServices.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    console.log("welcome to create user" + JSON.stringify(req.body));

    const user = await userServices.login(req.body.name, req.body.password);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};
exports.getAllUsers = async (req, res) => {
  console.log("welcome togetAllUsers");

  try {
    const users = await userServices.getAllUsers();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

exports.getUserById = async (req, res) => {
  try {
    console.log("welcome to getUserById" + JSON.stringify(req.params));
    const user = await userServices.getUserById(req.params.id);
    if (!user) return res.status(404).json({ msg: "user not found" });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    console.log("welcome to update User" + JSON.stringify(req.body));
    const user = await userServices.updateUSer(req.params.id, req.body);
    if (!user) return res.status(404).json({ msg: "Book not found" });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log("welcome to getUserById" + JSON.stringify(req.params));

    const user = await userServices.deleteUser(req.params.id);
    if (!user) return res.status(404).json({ msg: "Book not found" });
    res.json({ msg: "Book removed" });
  } catch (err) {
    console.log(err);
  }
};
