//ActiveNotes
function goExampleNote() {
    location.href = 'Note1.html';
}
//ActiveNotes
function goHome(){
    location.href = 'CWHome.html';
}
//CWHome
function goCreateButton() {
    location.href = 'NewNote.html';
}
//CWHome
function goActiveButton(){
    location.href = 'ActiveNotes.html';
}
//Login
function goSignup() {
    location.href = 'Signup.html';
};
//Login
function loginButton() {
    confirm("Backend Functionality");
    location.href = 'CWHome.html';
};
//NewNote, Note1
function saveNote() {
    alert('Backend Functionality - Note Saved');
};
//Newnote, Note1
function confirmHome() {
    confirm("Are you sure you want to leave this page? Any unsaved changes will be lost")
    location.href = 'CWHome.html';
};
//Note1
function delNote() {
    var yes = confirm("Are you sure you want to delete this note? (Backend functionality)")
    if (yes === true) {
        location.href = 'ActiveNotes.html';
    };
};
//Signup
function signupButton() {
    confirm("Signup initiated - backend functionality")
    location.href = 'Login.html';
};
