$(document).ready(function () {
  // Step-by-step navigation handling
  function showStep(currentStep, nextStep) {
    $(currentStep).addClass("d-none"); // Hide the current fieldset
    $(nextStep).removeClass("d-none"); // Show the next fieldset
  }

  // Next buttons
  $("#next-1").click(function () {
    showStep("#step-1", "#step-2");
  });

  $("#next-2").click(function () {
    showStep("#step-2", "#step-3");
  });

  $("#next-3").click(function () {
    showStep("#step-3", "#step-4");
  });

  $("#next-4").click(function () {
    showStep("#step-4", "#step-5");
  });

  $("#next-5").click(function () {
    showStep("#step-5", "#step-6");
  });

  $("#next-6").click(function () {
    showStep("#step-6", "#step-7");
  });

  // Previous buttons
  $("#prev-2").click(function () {
    showStep("#step-2", "#step-1");
  });

  $("#prev-3").click(function () {
    showStep("#step-3", "#step-2");
  });

  $("#prev-4").click(function () {
    showStep("#step-4", "#step-3");
  });

  $("#prev-5").click(function () {
    showStep("#step-5", "#step-4");
  });

  $("#prev-6").click(function () {
    showStep("#step-6", "#step-5");
  });

  $("#prev-7").click(function () {
    showStep("#step-7", "#step-6");
  });
});
