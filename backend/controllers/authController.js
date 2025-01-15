const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const ServiceProvider = require("../models/ServiceProvider");

// Register Student
const registerStudent = async (req, res) => {
  const { firstname, lastname, mobilenumber, email, password } = req.body;

  try {
    const existingUser = await Student.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Student({
      firstname,
      lastname,
      mobilenumber,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

    res.status(201).json({ user: savedUser, token });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

//Register Service Provider
const registerServiceProvider = async (req, res) => {
  const {
    companyname,
    address,
    city,
    state,
    email,
    mobilenumber,
    providedservice,
    password,
  } = req.body;

  try {
    const existingUser = await ServiceProvider.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new ServiceProvider({
      companyname,
      address,
      city,
      state,
      email,
      mobilenumber,
      providedservice,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

    res.status(201).json({ user: savedUser, token });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await Student.findOne({ email });

    if (!user) {
      user = await ServiceProvider.findOne({ email });
    }

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

module.exports = {
  registerStudent,
  registerServiceProvider,
  loginUser,
};
