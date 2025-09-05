const express = require('express')
const router = express.Router()

const submissionRouter =  require("../helpers/submission.helpers")

router.post("/", submissionRouter.createSubmission)

module.exports = router