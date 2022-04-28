class StudentsService {
    static getStudents(students){
        return students
    }
    static getStudentsCertification(students){
        const studentsCertification = students.filter((s) => s.haveCertification == true)
        return studentsCertification
    }
    static getStudentsCreditsOver500(students){
        const studentsCreditsOver500 = students.filter((s) => s.credits > 500)
        return studentsCreditsOver500
    }
}
module.exports = StudentsService;
