```javascript
// =========================================
// INFINITE-ARTIXA - CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


// Submit contact form

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get form values

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    // Basic validation

    if (name === "" || email === "" || subject === "" || message === "") {

        formMessage.textContent =
            "Please fill in all the fields.";

        formMessage.style.color = "#bbbbbb";

        return;
    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "#bbbbbb";

        return;
    }


    // Success message

    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    formMessage.style.color = "#ffffff";


    // Reset form

    contactForm.reset();

});
```
