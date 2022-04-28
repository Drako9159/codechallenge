const Reader = require("../utils/reader.js");
const students = Reader.readJsonFile("../../visualpartners.json");
const StudentsService = require("../services/studentsService.js");

class StudentsController{
    static getStudents(){
        return StudentsService.getStudents(students);
    }
    static getStudentsCertification(){
        return StudentsService.getStudentsCertification(students);
    }
    static getStudentsCreditsOver500(){
        return StudentsService.getStudentsCreditsOver500(students)
    }

}
console.log(StudentsController.getStudentsCreditsOver500())
module.exports = StudentsController