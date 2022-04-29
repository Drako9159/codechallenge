const Controller = require("./controllers/controller.js");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message:"Consulta de estudiantes"});
});
app.get("/v1/students", (req, res) => {
    const students = Controller.getStudents();
    res.json(students);
});
app.get("/v1/students/certificates/emails", (req, res) => {
    const studentsHaveCertification = Controller.getStudentsCertification(true);
    res.json({haveCertification: studentsHaveCertification});
});
app.get("/v1/students/nocertificates/emails", (req, res) => {
    const studentsHaveCertification = Controller.getStudentsCertification(false);
    res.json({haveNotCertification: studentsHaveCertification});
});
app.get("/v1/students/credits/:credits", (req, res) => {
    const credits = req.params.credits; 
    const studentsCredits = Controller.getStudentsCreditsOver500(credits);
    res.json({credits: studentsCredits});
});


app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});