const ExamModel = require("../../models/exam.model");

async function createExam(
  name,
  numberOfQuestions,
  totalOfQuestions,
  passPercentage,
  startDate
) {
  try {
    const exam = await ExamModel.create({
      name,
      numberOfQuestions,
      totalOfQuestions,
      passPercentage,
      startDate,
    });
    return exam;
  } catch (error) {
    console.log("error", error);
    console.log("Error Creating exam");
    return null;
  }
}

async function listExams() {
  try {
    const exams = await ExamModel.findAll({});
    return exams;
  } catch (error) {
    console.log("Error Creating exam");
    return false;
  }
}

async function updateExams(id, payload) {
  try {
    const exam = await ExamModel.findOne({
      where: {
        id,
      },
    });

    i;
  } catch (error) {
    console.log("Error Creating exam");
    return false;
  }
}

async function getExamById(req, res) {
  try {
	const { id } = req.params;
	const exam = await ExamModel.findOne({ where: { id } });
	if (!exam) {
		return res.status(404).json({ error: true, message: "Exam not found" });
	}
	
	return res.json({ error: false, exam });
  } catch (error) {
	return res.status(500).json({ error: true, message: error.message });
  }
}

module.exports = {
  createExam,
  listExams,
  updateExams,
  getExamById,
};
