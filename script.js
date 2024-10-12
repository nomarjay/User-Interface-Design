$(document).ready(function () {
  // Show the next fieldset and hide the current one
  $("#next-1").click(function () {
    $("#step-1").addClass("d-none"); // Hide the first fieldset using Bootstrap's d-none class
    $("#step-2").removeClass("d-none"); // Show the second fieldset by removing d-none
  });

  // Show the previous fieldset and hide the current one
  $("#prev-2").click(function () {
    $("#step-2").addClass("d-none"); // Hide the second fieldset using Bootstrap's d-none class
    $("#step-1").removeClass("d-none"); // Show the first fieldset by removing d-none
  });
});
