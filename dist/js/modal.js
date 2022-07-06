const openPrompt = document.querySelectorAll("[data-open]");
const closePrompt = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
 
for(const el of openPrompt) {
  el.addEventListener("click", function() {
    const prompt = this.dataset.open;
    document.getElementById(prompt).classList.add(isVisible);
  });
}
 
for (const el of closePrompt) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}


document.addEventListener("click", e => {
  if (e.target == document.querySelector(".prompt.is-visible")) {
    document.querySelector(".prompt.is-visible").classList.remove(isVisible);
  }
});


document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".prompt.is-visible")) {
      document.querySelector(".prompt.is-visible").classList.remove(isVisible);
    }
  });