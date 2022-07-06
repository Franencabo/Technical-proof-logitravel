const openPrompt = document.querySelectorAll("[data-open]");
const closePrompt = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
 

// Open modal
for(const el of openPrompt) {
  el.addEventListener("click", function() {
    const prompt = this.dataset.open;
    document.getElementById(prompt).classList.add(isVisible);
  });
}

// Close modal
for (const el of closePrompt) {
  el.addEventListener("click", function(e) {
    this.parentElement.parentElement.parentElement.parentElement.classList.remove(isVisible);
    e.preventDefault();
  });
}

// Close modal if you click anywhere
document.addEventListener("click", e => {
  if (e.target == document.querySelector(".prompt.is-visible")) {
    document.querySelector(".prompt.is-visible").classList.remove(isVisible);
  }
});

// Close modal if you click escape 
document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".prompt.is-visible")) {
      document.querySelector(".prompt.is-visible").classList.remove(isVisible);
    }
  });