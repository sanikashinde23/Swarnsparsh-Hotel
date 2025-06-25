document.addEventListener("DOMContentLoaded", function () {
    // ----- Booking Modal -----
    const bookingModal = document.getElementById('bookingModal');
    const closeModalBtn = document.querySelector('.close');
    const form = document.getElementById('bookingForm');
    const serviceInput = document.getElementById('service');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const bookingButtons = document.querySelectorAll('.book-now');

    if (bookingModal && closeModalBtn && form && serviceInput && nameInput && phoneInput && bookingButtons.length > 0) {
        bookingButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const service = event.target.getAttribute("data-service") || "General Booking";
                serviceInput.value = service;
                bookingModal.style.display = "block";
            });
        });

        function closeModal() {
            bookingModal.style.display = 'none';
            form.reset();
        }

        closeModalBtn.addEventListener("click", closeModal);
        window.addEventListener("click", (event) => {
            if (event.target === bookingModal) closeModal();
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();
            const service = serviceInput.value.trim();

            let numberOfPeople = prompt("Enter the number of people for this booking:");
            if (!numberOfPeople || isNaN(numberOfPeople) || numberOfPeople <= 0) {
                alert("Please enter a valid number of people.");
                return;
            }

            let paymentMethod = prompt("Choose a payment method: Online / PhonePay / Credit Card / Debit Card");
            if (!["Online", "PhonePay", "Credit Card", "Debit Card"].includes(paymentMethod)) {
                alert("Invalid payment method. Please try again.");
                return;
            }

            alert (`                               🎊  Congratulations ${name} !!
          Your booking for ${service} for ${numberOfPeople} people is confirmed. 
          Payment via ${paymentMethod}.`);
            closeModal();
        });
    }

 // ----- Smooth Scroll for Navigation -----
    document.querySelectorAll(".nav-links a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(this.getAttribute("href"));
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
    // ----- Close Modals with Escape Key -----
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            if (loginModal && loginModal.style.display === "block") loginModal.style.display = "none";
            if (bookingModal && bookingModal.style.display === "block") bookingModal.style.display = "none";
        }
    });

    // ----- Set Current Year in Footer -----
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});


//login 
// document.addEventListener("DOMContentLoaded", function () {
//     const loginBtn = document.getElementById("loginBtn");
//     const modal = document.getElementById("loginModal");
//     const closeBtn = document.querySelector(".close-btn");

//     console.log("loginBtn:", loginBtn);
//     console.log("modal:", modal);
//     console.log("closeBtn:", closeBtn);

//     if (!loginBtn || !modal || !closeBtn) {
//         console.error("Error: One or more elements not found!");
//         return;
//     }

//     loginBtn.addEventListener("click", () => {
//         console.log("Login button clicked");
//         modal.style.display = "block";
//     });

//     closeBtn.addEventListener("click", () => {
//         console.log("Close button clicked");
//         modal.style.display = "none";
//     });

//     window.addEventListener("click", (event) => {
//         if (event.target === modal) {
//             console.log("Clicked outside modal, closing...");
//             modal.style.display = "none";
//         }
//     });
// });