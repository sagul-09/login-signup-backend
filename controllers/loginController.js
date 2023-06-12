import userModel from "../models/signUpModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_TOKEN = "jijilkews123@!12cc";

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const validUser = await userModel.findOne({ email: email });

  if (!validUser) {
    return res.status(401).json({ message: "Email not found" });
  }

  if (bcrypt.compareSync(password, validUser.password)) {
    const AUTH_TOKEN = jwt.sign({ email: validUser.email }, JWT_TOKEN);

    if (res.status(201)) {
      return res.json({ status: "OK", token: AUTH_TOKEN });
    }
  }
  res.status(401).json({ message: "Invalid password" });
};

export { loginUser };
