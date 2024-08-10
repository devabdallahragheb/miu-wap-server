const User = require("../models/user.js");
var bcrypt = require("bcryptjs");
class UserService {
  async createUser(userDTO) {
    console.log("UserService   createUser" + JSON.stringify(userDTO));

    var hashedPassword = await bcrypt.hash(userDTO.password, 10);
    userDTO.password = hashedPassword;
    console.log(JSON.stringify(userDTO));

    const user = new User(userDTO);
    return await user.save();
  }

  async getAllUsers() {
    console.log("UserService   getAllUsers");

    return await User.find();
  }

  async getUserById(id) {
    console.log("UserService   getUserById" + id);

    return await User.findById(id);
  }

  async updateUSer(id, userDTO) {
    console.log("UserService   updateUSer" + id + JSON.stringify(userDTO));
    return await User.findByIdAndUpdate(id, { $set: userDTO }, { new: true });
  }

  async deleteUser(id) {
    console.log("UserService   deleteUser" + id);
    return await User.findByIdAndRemove(id);
  }

  async login(name, password) {
    console.log("UserService login " + name);
    // Find the user by username
    const user = await User.findOne({ name });
    if (!user) {
      throw new Error("User not found");
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // If login is successful, return the user (or a success message)
    return user;
  }
}
module.exports = new UserService();
