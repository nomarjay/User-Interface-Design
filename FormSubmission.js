document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
    };

    // Send form data as JSON
    fetch("/yourAppName/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // You can display a success message to the user
        alert(`Form submitted: ${data.message}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
