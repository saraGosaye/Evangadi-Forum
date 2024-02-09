require("dotenv").config();
const pool = require("./server/config/database");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
//routes
const userRouter = require("./server/api/users/user.router");
const questionRouter = require("./server/api/Question/question.router");
const answerRouter = require("./server/api/Answer/answer.router");
//Midlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answers", answerRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
