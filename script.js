const form = document.querySelector("[data-js-form]");
const template = document.querySelector("[data-js-template]");
const wrapper = document.querySelector("[data-js-wrapper]");

function handleSubmit(event) {
  event.preventDefault();

  const rating = new FormData(event.target).get("rating");

  if (rating) {
    wrapper.addEventListener("animationend", () => {
      // Change the main with the template when submit
      wrapper.innerHTML = template.innerHTML.replace(/{{ rating }}/, rating);

      // Animation
      wrapper.classList.replace("animate-out", "animate-in");
    });
    // Creating animation
    wrapper.classList.add("animate-out");
    // Makeing the same height for the card after submit
    wrapper.style.height = wrapper.offsetHeight + "px";
  }
}

form.addEventListener("submit", handleSubmit);
