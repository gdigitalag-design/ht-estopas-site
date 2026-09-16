document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const mobile = document.querySelector(".nav-mobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => mobile.classList.toggle("open"));
    mobile.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobile.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) header.style.boxShadow = "0 10px 30px -20px rgba(0,0,0,.6)";
    else header.style.boxShadow = "none";
  });

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }
});
