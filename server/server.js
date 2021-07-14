import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: 'http://localhost:4000',
    credentials: true,
  })
);

const users = [
  { id: 1, email: "admin@gmail.com", password: "123123" },
]

app.post("/login", function (req, res) {
  try {
    const email = req.body.data.email;
    const password = req.body.data.password;
    const findUser = users.find(user => {
      return user.email === email && user.password === password;
    });

    if (findUser) {
      const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken, message: "Sign in successfully!", status: true, });
    } else {
      res.json({ message: "Username or password invalid!", status: false, });
      return;
    }
  } catch (error) {
    return;
  }
})

app.post("/admin", function (req, res) {
  try {
    const token = req.body.token;
    const result = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    if (result) {
      res.json({ message: "Login Successfully!", status: true })
    }
  } catch (error) {
    return;
  }
})

app.listen(PORT, () => {
  console.log("Server is running on PORT" + PORT);
})
