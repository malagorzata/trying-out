// document.addEventListener("DOMContentLoaded", function () {
//   var checkbox = document.querySelector('input[type="checkbox"]');

// document.getElementById("myButton").onclick = function redirect() {
//   location.href = "two.html";
// };

// document.getElementById("myButtonTwo").onclick = function redirect2() {
//   location.href = "index.html";
// };
//   checkbox.addEventListener("change", function () {
//     if (checkbox.checked) {
//       // do this
//       console.log("Checked");
//     } else {
//       // do that
//       console.log("Not checked");
//     }
//   });
// });

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    location.href = "two.html";
  } else {
    location.href = "index.html";
  }
}

function myFunction2() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck2");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    location.href = "index.html";
  } else {
    location.href = "index.html";
  }
}
