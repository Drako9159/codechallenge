const Reader = require("../utils/reader.js");
const students = Reader.readJsonFile("./visualpartners.json");
const StudentsService = require("../services/studentsService");

class Controller{
    static getStudents(){
        return StudentsService.getStudents(students);
    }
    static getStudentsCertification(verification){
        return StudentsService.getStudentsCertification(students, verification);
    }
    static getStudentsCreditsOver500(credits){
        return StudentsService.getStudentsCreditsOver500(students, credits);
    }
}
module.exports = Controller;
