const express = require('express')
const router = express.Router()

const examContoller = require('../contorllers/exam.controller')


router.post("/", examContoller.createExam)
// router.get("/", examHelpers.listExams)
// router.get("/:id", examHelpers.getExamById)
// router.put("/:id", examHelpers.updateExams)

module.exports = router