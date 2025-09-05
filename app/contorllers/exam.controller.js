const examHelpers = require("../helpers/exam.helpers")


async function createExam(req, res) {
    try {
        console.log("req.body", req.body)
        const {
            name,
            numberOfQuestions,
            numberOfQuestionsForExam,
            passingPercentage,
            startDate
        } = req.body

        // if (!name
        //     || !numberOfQuestions
        //     || !numberOfQuestionsForExam
        //     || !passingPercentage
        //     || !startDate
        // ) {
        //     return res.status(400).json({
        //         error: true,
        //         message: "Missing mandatory fields"
        //     })
        // }    

        const exam = await examHelpers.createExam(
            name,
            numberOfQuestions,
            numberOfQuestionsForExam,
            passingPercentage,
            startDate
        )

        return res.json({
            error: false,
            exam
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }     
}

module.exports =  { createExam } 
