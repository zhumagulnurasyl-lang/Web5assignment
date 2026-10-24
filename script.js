// Task 1 - User Profile
const userProfile = {
    name: "Nurassyl",
    birthYear: 2007,
    isDeveloper: false,
    hobbies: ["Football", "Games", "Programming"]
};

// Task 2 - Calculations
const currentYear = new Date().getFullYear();
let age = currentYear - userProfile.birthYear;
let monthsOld = age * 12;

const nameOutput = document.getElementById("nameOutput");
const birthYearOutput = document.getElementById("birthYearOutput");
const developerOutput = document.getElementById("developerOutput");
const hobbiesOutput = document.getElementById("hobbiesOutput");
const ageOutput = document.getElementById("ageOutput");
const monthsOutput = document.getElementById("monthsOutput");
const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const removeItemButton = document.getElementById("removeItemButton");
const itemList = document.getElementById("itemList");

usernameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;
birthYearInput.max = currentYear;

// Function to display profile
function updateProfile() {
    age = currentYear - userProfile.birthYear;
    monthsOld = age * 12;
    nameOutput.textContent = userProfile.name;
    birthYearOutput.textContent = userProfile.birthYear;
    developerOutput.textContent = userProfile.isDeveloper;
    hobbiesOutput.textContent = userProfile.hobbies.join(", ");
    ageOutput.textContent = age;
    monthsOutput.textContent = monthsOld;
    console.log("Current age:", age);
}

updateProfile();

// Task 4 - Form Event
profileForm.addEventListener("submit", function(event) {
    event.preventDefault();
    userProfile.name = usernameInput.value;
    userProfile.birthYear = Number(birthYearInput.value);
    updateProfile();
});

// Task 5 - Add Item
addItemButton.addEventListener("click", function() {
    const itemText = itemInput.value.trim();
    if (itemText !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = itemText;
        itemList.appendChild(newItem);
        itemInput.value = "";
    }
});

// Task 5 - Remove Item
removeItemButton.addEventListener("click", function() {
    if (itemList.lastElementChild) {
        itemList.lastElementChild.remove();
    }
});
