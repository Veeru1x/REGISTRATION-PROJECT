const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (name && roll && course && email && phone) {
    // Save student data in Local Storage
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push({ name, roll, course, email, phone });
    localStorage.setItem("studentsINFO", JSON.stringify(students));

    message.style.color = "green";
    message.innerText = "✅ Student Registered Successfully!";
    form.reset();
  } else {
    message.style.color = "red";
    message.innerText = "⚠️ Please fill all fields correctly.";
  }
});
