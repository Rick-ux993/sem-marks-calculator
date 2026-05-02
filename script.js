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

  let rawYGPA = ((oddSGPA * oddSub) + (evenSGPA * evenSub)) / totalSubjects;
  
  let ygpa = parseFloat(rawYGPA.tofixed(2));
  
  let totalMarks = totalSubjects * 100;

  let obtainedMarks = (ygpa * totalMarks) / 10;

  let percentage = (ygpa - 0.75) * 10;

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
