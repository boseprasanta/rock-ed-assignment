const express = require('express')
const router = express.Router()

const examContoller = require('../contorllers/exam.controller')


router.post("/", examContoller.createExam)
router.get("/", examContoller.listExams)
router.get("/:id", examContoller.getExamById)
router.put("/:id", examContoller.updateExam)

module.exports = router