const StudentsService = require("./../lib/services/studentsService.js");

describe("Tests Students", () => {
    test("Test1: for getStudent", () => {
        const students = [{certificated: "check"}];
        const studentsHave = StudentsService.getStudents(students);
        expect(studentsHave.length).toBe(1);
    });
    test("Test2: for getStudentsCertification", () => {
        const students = [{certificated: "check", haveCertification: true, email: "gravers9@getMaxListeners.com" }];
        const studentsHave = StudentsService.getStudentsCertification(students, true);
        expect(studentsHave).toEqual(["gravers9@getMaxListeners.com"]);
    });
    test("Test3: for getStudentsCreditsOver500", () => {
        const students = [{credits : 300},{credits: 500}, {credits: 900}];
        const studentsHave = StudentsService.getStudentsCreditsOver500(students, 600);
        expect(studentsHave).toEqual([{credits : 900}]);
    });

});