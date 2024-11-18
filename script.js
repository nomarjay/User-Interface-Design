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

  // Function to validate required fields in the current step
  function validateStep(step) {
    let isValid = true;

    // Find all required fields in the current step
    $(step)
      .find("input[required]")
      .each(function () {
        const $input = $(this);
        const errorDiv = $input.siblings(".error-message");

        if (!$input.val().trim()) {
          // Show error message if the field is empty
          if (errorDiv.length === 0) {
            $input.after(
              '<div class="error-message text-danger">* Required field</div>'
            );
          }
          isValid = false;
        } else {
          // Remove error message if the field is valid
          errorDiv.remove();
        }
      });

    return isValid;
  }

  // Next buttons with validation
  $("#next-1").click(function () {
    if (validateStep("#step-1")) {
      goToStep("#step-1", "#step-2");
    }
  });

  $("#next-2").click(function () {
    if (validateStep("#step-2")) {
      goToStep("#step-2", "#step-3");
    }
  });

  $("#next-3").click(function () {
    if (validateStep("#step-3")) {
      goToStep("#step-3", "#step-4");
    }
  });

  $("#next-4").click(function () {
    if (validateStep("#step-4")) {
      goToStep("#step-4", "#step-5");
    }
  });

  $("#next-5").click(function () {
    if (validateStep("#step-5")) {
      goToStep("#step-5", "#step-6");
    }
  });

  $("#next-6").click(function () {
    if (validateStep("#step-6")) {
      goToStep("#step-6", "#step-7");
    }
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

  // Remove error message on input
  $("input[required]").on("input", function () {
    $(this).siblings(".error-message").remove();
  });

  // Function to clone education entry
  let fieldsetIndex = 1; // To track unique fieldset indices

  // Add new fieldset
  $("#add-education-fieldset").click(function () {
    let newFieldset = $("#education-step-container .education-step")
      .first()
      .clone();

    // Clear input values and update attributes for uniqueness
    newFieldset.find("input").each(function () {
      $(this).val(""); // Clear input fields
      if ($(this).attr("type") === "radio") {
        let name = $(this).attr("name");
        $(this).attr("name", name.replace(/\d+$/, fieldsetIndex)); // Update name attribute
      }
    });

    // Append the new fieldset
    $("#education-step-container").append(newFieldset);
    fieldsetIndex++;
  });

  // Delete fieldset
  $(document).on("click", ".delete-fieldset", function () {
    if ($(".education-step").length > 1) {
      $(this).closest(".education-step").remove();
    } else {
      alert("You must have at least one education fieldset.");
    }
  });
});
