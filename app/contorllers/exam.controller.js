const examHelpers = require("../helpers/exam.helpers");

async function createExam(req, res) {
  try {
    const {
      name,
      numberOfQuestions,
      numberOfQuestionsForExam,
      passingPercentage,
      startDate,
    } = req.body;

    if (
      !name ||
      !numberOfQuestions ||
      !numberOfQuestionsForExam ||
      !passingPercentage ||
      !startDate
    ) {
      return res.status(400).json({
        error: true,
        message: "Missing mandatory fields",
      });
    }

    const exam = await examHelpers.createExam(
      name,
      numberOfQuestions,
      numberOfQuestionsForExam,
      passingPercentage,
      startDate
    );

    return res.json({
      error: false,
      exam,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
}

async function listExams(req, res) {
  try {
    const exams = await examHelpers.listExams();
    return res.json({
      error: false,
      exams,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
}

async function updateExam(req, res) {
  try {
    const { id } = req.params;
    const payload = req.body;

    if (!id) {
      return res.status(400).json({
        error: true,
        message: "Missing mandatory fields",
      });
    }

    const exam = await examHelpers.updateExams(id, payload);
    if (!exam) {
      return res.status(404).json({
        error: true,
        message: "Exam not found",
      });
    }

    return res.json({
      error: false,
      exam,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
}

async function getExamById(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        error: true,
        message: "Missing mandatory fields",
      });
    }

    const exam = await examHelpers.getExamById(id);
    if (!exam) {
      return res.status(404).json({
        error: true,
        message: "Exam not found",
      });
    }

    return res.json({
      error: false,
      exam,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
}
module.exports = { createExam, listExams, updateExam, getExamById };
