const jwt = require("jsonwebtoken");
const Token = require("../models/Token");
const dotenv = require('dotenv');

dotenv.config();
const tokenGeneration = async (email) => {
  const token = jwt.sign(
    {
      email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "10m" }
  );

  const tokenJWT = new Token({
    token: token,
    email: email,
  });

  await tokenJWT.save();

  return token;
};

module.exports = tokenGeneration;
