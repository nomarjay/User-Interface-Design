document.addEventListener("DOMContentLoaded", function () {
  // Hide all sections except the first one
  const sections = document.querySelectorAll('div[id^="page-"]');
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = "none";
    }
  });

  // Add click event for 'Next' buttons
  const nextButtons = document.querySelectorAll(".next-btn");
  nextButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const nextPageId = button.getAttribute("data-next");
      showPage(nextPageId);
    });
  });

  // Add click event for 'Previous' buttons
  const prevButtons = document.querySelectorAll(".prev-btn");
  prevButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const prevPageId = button.getAttribute("data-prev");
      showPage(prevPageId);
    });
  });

  // Function to show the correct page
  function showPage(pageId) {
    sections.forEach((section) => {
      section.style.display = section.id === pageId ? "block" : "none";
    });
  }
});
