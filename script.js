const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");
};


const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.querySelector(".job-title");

editJobBtn.onclick = () => {
    const newTitle = prompt("Enter new job title:");
    if (newTitle) {
        jobTitle.textContent = newTitle;
    }
};


const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.onclick = () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
};


const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.onkeyup = () => {
    const max = 200;
    counter.textContent = max - msgBox.value.length;
};


function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in Name and Email.");
        return false;
    }
    return true;
}


const dateDisplay = document.getElementById("dateDisplay");
const today = new Date();

dateDisplay.textContent = today.toDateString();


const colorPicker = document.getElementById("colorPicker");

colorPicker.oninput = () => {
    document.body.style.backgroundColor = colorPicker.value;
};
