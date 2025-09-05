async function createSubmission(params) {
	try {
		const submission = await SubmissionModel.create(params)
		return submission
	} catch (error) {
		console.log("error", error)
		console.log("Error Creating submission")
		return null
	}
}