import userModel from '../models/signUpModel.js'
import jwt from 'jsonwebtoken'
const JWT_TOKEN = "jijilkews123@!12cc";

const userData = async (req, res) => {
  const { token } = req.body;
  try {
    const loggedInUser = jwt.verify(token, JWT_TOKEN);
    const loggedInUserEmail = loggedInUser.email;
    userModel.findOne({ email: loggedInUserEmail }).then((data) => {
      res.status(200).json({ data });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {userData}