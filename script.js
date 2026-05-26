/* ========================= */
/* MOBILE MENU */
/* ========================= */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        navbar.classList.toggle("scrolled", window.scrollY > 50);

    }

});


/* ========================= */
/* SCROLL REVEAL ANIMATION */
/* ========================= */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));


/* ========================= */
/* CONTACT FORM */
/* ========================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitBtn = document.getElementById("submitBtn");

        submitBtn.innerText = "Sending...";

        const formData = new FormData(bookingForm);

        try {

            const response = await fetch("https://formspree.io/f/mvzlewgg", {

                method: "POST",

                body: formData,

                headers: {
                    Accept: "application/json"
                }

            });

            if (response.ok) {

                alert("Message sent successfully!");

                bookingForm.reset();

                // REDIRECT TO SUCCESS PAGE
                window.location.href = "success.html";

            } else {

                alert("Failed to send message.");

                submitBtn.innerText = "Send Message";

            }

        } catch (error) {

            alert("Network error.");

            submitBtn.innerText = "Send Message";

        }

    });

}
