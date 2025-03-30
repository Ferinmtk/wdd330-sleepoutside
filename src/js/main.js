import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

/**Call to action-register with site */
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("register-modal");
    const closeModal = document.querySelector(".modal-close");
    const registerButton = document.getElementById("register-now");
  
    if (!localStorage.getItem("visited")) {
      modal.classList.remove("hidden");
      localStorage.setItem("visited", "true");
    }
  
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    registerButton.addEventListener("click", () => {
      // Redirect to registration page or handle registration logic
      modal.classList.add("hidden");
      alert("Thank you for registering!");
    });
  });
  