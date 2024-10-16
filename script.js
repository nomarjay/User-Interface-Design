$(document).ready(function () {
  // Function to show a specific step
  function showStep(step) {
    $("fieldset").addClass("d-none"); // Hide all fieldsets
    $(step).removeClass("d-none"); // Show the specific fieldset
  }

  // Function to get the saved step from localStorage
  function getSavedStep() {
    let savedStep = localStorage.getItem("currentStep");
    return savedStep ? `#step-${savedStep}` : "#step-1"; // Default to step 1 if none saved
  }

  // On page load, show the saved step
  showStep(getSavedStep());

  // Handle step navigation and save the current step
  function goToStep(currentStep, nextStep) {
    $(currentStep).addClass("d-none"); // Hide the current step
    $(nextStep).removeClass("d-none"); // Show the next step
    localStorage.setItem("currentStep", nextStep.replace("#step-", "")); // Save the current step in localStorage
  }

  // Next buttons
  $("#next-1").click(function () {
    goToStep("#step-1", "#step-2");
  });

  $("#next-2").click(function () {
    goToStep("#step-2", "#step-3");
  });

  $("#next-3").click(function () {
    goToStep("#step-3", "#step-4");
  });

  $("#next-4").click(function () {
    goToStep("#step-4", "#step-5");
  });

  $("#next-5").click(function () {
    goToStep("#step-5", "#step-6");
  });

  $("#next-6").click(function () {
    goToStep("#step-6", "#step-7");
  });

  // Previous buttons
  $("#prev-2").click(function () {
    goToStep("#step-2", "#step-1");
  });

  $("#prev-3").click(function () {
    goToStep("#step-3", "#step-2");
  });

  $("#prev-4").click(function () {
    goToStep("#step-4", "#step-3");
  });

  $("#prev-5").click(function () {
    goToStep("#step-5", "#step-4");
  });

  $("#prev-6").click(function () {
    goToStep("#step-6", "#step-5");
  });

  $("#prev-7").click(function () {
    goToStep("#step-7", "#step-6");
  });
});
