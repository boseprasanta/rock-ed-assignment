Final Table:

Exams:






Api list:1. Post /exams
body: {
    name: “” // string, validation len > 0 is string,
    numberOfQuestions: number,
    validation > 0, is a number
} 
   
   
   
   
   table:Exams

 createAt
2. numberOfQuestions
3. Status enum [“draft”, “published”]
4. 


2. Update Exam: Put /exams

Body 

{	name: string
	numberOfQuestions: 
	numberOfQuestionsForExam:
	passingPercentage: number,
	startDate: Date}response: 
{	error: false,
	exam: {            // put the whole json here	}}3. Get all exams:Get /exams body: NAresponse:[{	exams:   }]
1. Get exam by Id:GET /exams/:id Response: { exam }





Tables Required:
1. Submissions (Will have a foreign key ref to exams)
2. Questions (Will have a foreign key ref to exams)
3. Exams


Exams:

name: string
numberOfQuestions: 
numberOfQuestionsForExam:
passingPercentage: number,
startDate: Date
createdAt: Date
updatedAt: Date


Questions: 
