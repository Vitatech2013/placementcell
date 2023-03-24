const express = require('express')
const app = express()

app.get('/home', loadstdHtml);
app.get('/admin', admin);
app.get('/student', student);
app.get('/officer', officer);
app.get('/adminlogin', AdminLogin);
app.get('/StudentLogin', StudentLogin);
app.get('/OfficerLogin', OfficerLogin);

app.get('/Admin/AddStudents', AddStudents);
app.get('/Admin/AddOfficers', AddOfficers);
app.get('/Admin/ViewStudents', ViewStudents);
app.get('/Admin/ViewOfficers', ViewOfficers);
app.get('/Admin/ViewCompanys', ViewCompanys);
app.get('/Admin/ViewJobs', ViewJobs);
app.get('/Admin/ViewApplyJobs', ViewApplyJobs);
app.get('/Admin/ChangePassword', AdminPassword);

app.get('/Student/ViewProfile', ViewProfile);
app.get('/Student/ViewCompanys', ViewCompany);
app.get('/Student/ViewJobs', ViewJob);
app.get('/Student/ViewApplyJobs', ViewApplyJob);
app.get('/Student/ChangePassword', StudentPassword);

app.get('/Officer/Viewprofile', Viewprofile);
app.get('/Officer/AddCompanys', AddCompanys);
app.get('/Officer/Addjobs', AddJobs);
app.get('/Officer/ViewCompanies', ViewCompanies);
app.get('/Officer/Viewjobs', Viewjobs);
app.get('/Officer/ViewApplyjobs', ViewApplyjobs);
app.get('/Officer/ChangePassword', OfficerPassword);

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

function loadstdHtml(req, res) {
    res.sendFile('home.html', { root: __dirname });
}
function AdminLogin(req, res) {
    res.sendFile('adminlogin.html', { root: __dirname });
}
function StudentLogin(req, res) {
    res.sendFile('StudentLogin.html', { root: __dirname });
}
function OfficerLogin(req, res) {
    res.sendFile('OfficerLogin.html', { root: __dirname });
}

function admin(req, res) {
    res.sendFile('Admin/admin.html', { root: __dirname });
}

function AddStudents(req, res) {
    res.sendFile('Admin/AddStudents.html', { root: __dirname });
}

function AddOfficers(req, res) {
    res.sendFile('Admin/AddOfficers.html', { root: __dirname });
}

function ViewStudents(req, res) {
    res.sendFile('Admin/ViewStudents.html', { root: __dirname });
}

function ViewOfficers(req, res) {
    res.sendFile('Admin/ViewOfficers.html', { root: __dirname });
}
function ViewCompanys(req, res) {
    res.sendFile('Admin/ViewCompanys.html', { root: __dirname });
}

function ViewJobs(req, res) {
    res.sendFile('Admin/ViewJobs.html', { root: __dirname });
}

function ViewApplyJobs(req, res) {
    res.sendFile('Admin/ViewApplyJobs.html', { root: __dirname });
}

function AdminPassword(req, res) {
    res.sendFile('Admin/ChangePassword.html', { root: __dirname });
}

function student(req, res) {
    res.sendFile('Student/student.html', { root: __dirname });
}

function ViewProfile(req, res) {
    res.sendFile('Student/ViewProfile.html', { root: __dirname });
}

function ViewCompany(req, res) {
    res.sendFile('Student/ViewCompanys.html', { root: __dirname });
}

function ViewJob(req, res) {
    res.sendFile('Student/ViewJobs.html', { root: __dirname });
}

function ViewApplyJob(req, res) {
    res.sendFile('Student/ViewApplyJobs.html', { root: __dirname });
}

function StudentPassword(req, res) {
    res.sendFile('Student/ChangePassword.html', { root: __dirname });
}

function officer(req, res) {
    res.sendFile('Officer/officer.html', { root: __dirname });
}

function AddCompanys(req, res) {
    res.sendFile('Officer/AddCompanys.html', { root: __dirname });
}

function AddJobs(req, res) {
    res.sendFile('Officer/AddJobs.html', { root: __dirname });
}

function Viewprofile(req, res) {
    res.sendFile('Officer/Viewprofile.html', { root: __dirname });
}

function ViewCompanies(req, res) {
    res.sendFile('Officer/ViewCompanies.html', { root: __dirname });
}

function Viewjobs(req, res) {
    res.sendFile('Officer/Viewjobs.html', { root: __dirname });
}

function ViewApplyjobs(req, res) {
    res.sendFile('Officer/ViewApplyjobs.html', { root: __dirname });
}

function OfficerPassword(req, res) {
    res.sendFile('Officer/ChangePassword.html', { root: __dirname });
}
