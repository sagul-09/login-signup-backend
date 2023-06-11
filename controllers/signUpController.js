import userModel from '../models/signUpModel.js'
import bcrypt from 'bcryptjs';
const addNewUser = async (req, res) => {
const encryptedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: encryptedPassword,
  });

  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ message: "Email ID already exists.." });
    }
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addNewUser };


