// Grade system  calculation
function grade(marks) {
  if (marks >= 80 && marks <= 100) {
    console.log("A+");
  } else if (marks >= 70 && marks < 80) {
    console.log("A");
  } else if (marks >= 65 && marks < 70) {
    console.log("A-");
  } else if (marks >= 55 && marks < 65) {
    console.log("B");
  } else if (marks >= 40 && marks < 55) {
    console.log("B-");
  } else if (marks >= 34 && marks < 40) {
    console.log("C");
  } else if (marks >= 0 && marks <= 33) {
    console.log("FAIL");
  } else {
    console.log("matha nosto");
  }
}
grade(110);
