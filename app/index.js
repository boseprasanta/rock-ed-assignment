require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser")

const examRouter =  require("./routes/exams.routes")
const  submissionRouter = require("./routes/submissions.routes")


const app = express()

app.use(bodyparser.json())

app.use("/exams", examRouter)
app.use("/submissions", submissionRouter)

module.exports = app