 // 🌟 Rubioza JavaScript

// 1. Button interaction
function showMessage() {
  alert("Welcome to Rubioza 🔥");
}

// 2. Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 3. Simple animation on scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// 4. Initial hidden state for animation
window.onload = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
  });
};