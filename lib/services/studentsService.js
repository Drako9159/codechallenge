class StudentsService {
    static getStudents(students){
        return students;
    }
    static getStudentsCertification(students, verification){
        const studentsCertification = students.filter((s) => s.haveCertification == verification);
        const arrayEmailsCertificated = studentsCertification.map((s) => s.email);
        return arrayEmailsCertificated;
    }
    static getStudentsCreditsOver500(students, credits){
        const studentsCreditsOver500 = students.filter((s) => s.credits > credits);
        return studentsCreditsOver500;
    }
}
module.exports = StudentsService;
