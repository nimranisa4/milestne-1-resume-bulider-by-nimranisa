var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilepictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var experience = experienceElement.value;
        var education = educationElement.value;
        var Skills = skillsElement.value;
        //profile picture
        var profilepicturefile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        var resumeOutput = "\n    <h2>Resume<h2>\n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\"alt=\"profile picture\" class=\"profile picture\"size=\"20\">") : '', "\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>email:</strong> ").concat(email, " </p>\n    <p><strong>phone Number:</strong> ").concat(phone, " </p>\n\n\n    <h3>Education<h3>\n   <p>").concat(education, "</p>\n\n   \n    <h4>Experience<h4>\n   <p>").concat(experience, "</p>\n  \n   \n    <h5>Skills<h5>\n   <p>").concat(Skills, "</p>\n   ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
