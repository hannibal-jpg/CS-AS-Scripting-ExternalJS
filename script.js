function checkAge() {
  var age, group;
  age = document.getElementById("ageInput").value;

  if (age >= 60) {
    group = "Senior";
  } else if (age >= 18) {
    group = "Adult";
  } else {
    group = "Minor";
  }

  alert("You are a " + group);
}

// Enable Enter key functionality
document.getElementById("ageInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkAge();
  }
});
