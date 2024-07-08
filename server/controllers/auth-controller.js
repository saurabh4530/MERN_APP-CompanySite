//@ts-nocheck
const User = require("../models/user_model");
const bcrypt = require("bcryptjs");

//home logic
const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("Welcome to world best project developed by SAURABH KAKADE");
  } catch (error) {
    console.error(error);
  }
};
//!registration logic
//*-----------------------------------------------------------------
//1.get registrtion data:retrive users data(usename,email,password)
//2.check email existance:checked if it is already registered
//3.hash password:secureley  hash password
//4.create user:create ew user with hash password
//5.save to db:save user data to Database
//6.respond:repond with "registration successful" or handle error
//*-----------------------------------------------------------------
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).send("Email already exist");
    }

    //bcrypt hash password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "userCreated successfully ",
      token: await userCreated.generateToken(),

      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ msg: "internal server Error " });
  }
};
//!login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    // const user=await bcrypt .compare(password,userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "login successfully ",
        token: await userExist.generateToken(),

        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server Error ");
  }
};

module.exports = { home, register, login };
