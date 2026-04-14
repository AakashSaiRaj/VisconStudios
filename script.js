const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const revealNodes = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealNodes.forEach((node) => observer.observe(node));
