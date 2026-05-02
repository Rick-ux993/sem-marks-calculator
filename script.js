// SGPA → Percentage
function convertSGPA() {
  let sgpa = parseFloat(document.getElementById("sgpa").value);

  if (isNaN(sgpa)) {
    alert("Enter valid SGPA");
    return;
  }

  let percentage = (sgpa - 0.75) * 10;

  document.getElementById("percentage").value = percentage.toFixed(2);
}

function resetSGPA() {
  document.getElementById("sgpa").value = "";
  document.getElementById("percentage").value = "";
}


// Yearly Calculation
function calculateYear() {
  let oddSGPA = parseFloat(document.getElementById("oddSGPA").value);
  let evenSGPA = parseFloat(document.getElementById("evenSGPA").value);
  let oddSub = Number(document.getElementById("oddSub").value);
  let evenSub = Number(document.getElementById("evenSub").value);

  if (isNaN(oddSGPA) || isNaN(evenSGPA) || isNaN(oddSub) || isNaN(evenSub)) {
    alert("Fill all fields properly");
    return;
  }

  let totalSubjects = oddSub + evenSub;

  if (totalSubjects === 0) {
    alert("Subjects cannot be zero");
    return;
  }
  
  let rawYGPA = ((oddSGPA * oddSub) + (evenSGPA * evenSub)) / totalSubjects;
  
  let ygpa = parseFloat(rawYGPA.toFixed(2));
  
  let totalMarks = totalSubjects * 100;

  let percentage = (ygpa - 0.75) * 10;

  let obtainedMarks = (percentage / 100) * totalMarks;
  

  document.getElementById("ygpa").innerText = ygpa.toFixed(2);
  document.getElementById("totalMarks").innerText = totalMarks;
  document.getElementById("obtainedMarks").innerText = obtainedMarks.toFixed(2);
  document.getElementById("overallPercent").innerText = percentage.toFixed(2);
}

function resetYear() {
  document.getElementById("oddSGPA").value = "";
  document.getElementById("evenSGPA").value = "";
  document.getElementById("oddSub").value = "";
  document.getElementById("evenSub").value = "";

  document.getElementById("ygpa").innerText = "";
  document.getElementById("totalMarks").innerText = "";
  document.getElementById("obtainedMarks").innerText = "";
  document.getElementById("overallPercent").innerText = "";
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  let isDark = 
  document.body.claslist.contains("dark");
  localstorage.setItem("theme",isDark);

document.getElementById("themeBtn").innerText = 
isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}
window.onload = function () {
  if (localstorage.getItem("theme") === "true") {
document.body.classlist.add("dark");
document.grtElementById("themeBtn").innerText = "☀️ Light Mode";
  }
};
