function toggleMenu() {
  const menu = document.querySelector(".menu ul");
  menu.classList.toggle("active");
}

// Animated Text Logic
const textArray = [
  "Custom Software Development",
  "Web & Mobile Application Development",
  "Enterprise Automation & Integration",
  "E-Commerce & Online Presence Development",
  "AI & Digital Transformation Services",
];
let index = 0;

setInterval(() => {
  index = (index + 1) % textArray.length;
  document.getElementById("animated-text").textContent = textArray[index];
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".services-slider");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  if (slider && prevButton && nextButton) {
    prevButton.addEventListener("click", function () {
      slider.scrollBy({ left: -slider.offsetWidth, behavior: "smooth" });
    });

    nextButton.addEventListener("click", function () {
      slider.scrollBy({ left: slider.offsetWidth, behavior: "smooth" });
    });
  } else {
    console.warn("Slider or buttons not found. Skipping event listeners.");
  }
});

// Full-Slider Wrapper Functionality
document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper1");
  const slides = document.querySelectorAll(".testimonial-child");
  const prevBtn = document.querySelector(".prev-slide");
  const nextBtn = document.querySelector(".next-slide");

  if (!sliderWrapper || !prevBtn || !nextBtn || slides.length === 0) {
    return;
  }

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlidePosition() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateButtonStates();
  }

  function updateButtonStates() {
    prevBtn.classList.toggle("disabled", currentSlide === 0);
    nextBtn.classList.toggle("disabled", currentSlide === totalSlides - 1);

    prevBtn.style.opacity = currentSlide === 0 ? "0.5" : "1";
    prevBtn.style.cursor = currentSlide === 0 ? "not-allowed" : "pointer";
    prevBtn.style.backgroundColor = currentSlide === 0 ? "#333333" : "#1b1b1b";

    nextBtn.style.opacity = currentSlide === totalSlides - 1 ? "0.5" : "1";
    nextBtn.style.cursor =
      currentSlide === totalSlides - 1 ? "not-allowed" : "pointer";
    nextBtn.style.backgroundColor =
      currentSlide === totalSlides - 1 ? "#333333" : "#1b1b1b";
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlidePosition();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlidePosition();
    }
  }

  nextBtn.addEventListener("click", function () {
    if (!nextBtn.classList.contains("disabled")) {
      nextSlide();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (!prevBtn.classList.contains("disabled")) {
      prevSlide();
    }
  });

  nextBtn.addEventListener("mouseenter", function () {
    if (!this.classList.contains("disabled")) {
      this.style.backgroundColor = "#2d2d2d";
    }
  });

  nextBtn.addEventListener("mouseleave", function () {
    if (!this.classList.contains("disabled")) {
      this.style.backgroundColor = "#1b1b1b";
    }
  });

  prevBtn.addEventListener("mouseenter", function () {
    if (!this.classList.contains("disabled")) {
      this.style.backgroundColor = "#2d2d2d";
    }
  });

  prevBtn.addEventListener("mouseleave", function () {
    if (!this.classList.contains("disabled")) {
      this.style.backgroundColor = "#1b1b1b";
    }
  });
});

// Grab all accordion items
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");

  title.addEventListener("click", () => {
    // Close other items if you want only one open at a time:
    // accordionItems.forEach(i => i !== item && i.classList.remove('active'));

    // Toggle this one
    item.classList.toggle("active");
  });
});

function contectUs() {
  window.location.href = "./pages/contactus.html"; // Redirects to contect.html
}

function projectPage() {
  window.location.href = "./pages/project-success-story.html"; // Redirects to project-success-story.html
}

function testoPage() {
  window.location.href = "./pages/testimonial.html"; // Redirects to testimonial.html
}

function blogPage() {
  window.location.href = "./pages/blog.html"; // Redirects to contect.html
}
function aboutUs() {
  window.location.href = "./pages/aboutpage.html"; // Redirects to contect.html
}
function ourServices() {
  window.location.href = "./pages/services.html"; // Redirects to service.html
}
function page() {
  window.location.href = "./pages/blog2.html"; // Redirects to contect.html
}

function togglelinkedin() {
  window.open("https://linkedin.com/company/eternalgrowth", "_blank");
}

function toggleInsta() {
  window.open(
    "https://www.instagram.com/eternalgrowth.in?igsh=MTFxb2g5aXdscHhpMQ==",
    "_blank"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const processSteps = document.querySelectorAll(".row-container-process");

  function revealOnScroll() {
    processSteps.forEach((step) => {
      const rect = step.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
        step.classList.add("animate");
      } else {
        step.classList.remove("animate"); // Remove animation when out of view
      }
    });
  }

  // Run on scroll and on page load
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// Counting Number

document.addEventListener("DOMContentLoaded", function () {
  function animateCounter(element, targetValue, duration) {
    let startValue = 0;
    let startTime = null;

    function updateCounter(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.floor(progress * targetValue);
      element.textContent =
        currentValue + (targetValue.toString().includes("k") ? "k+" : "+");

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  const statNumbers = document.querySelectorAll(".digibrand-stat-number");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetValue = parseInt(
            entry.target.textContent.replace(/\D/g, ""),
            10
          );
          animateCounter(entry.target, targetValue, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((number) => observer.observe(number));
});

document.querySelectorAll(".ag2025-faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentNode;
    const icon = question.querySelector(".ag2025-toggle-icon");

    // Toggle active state
    item.classList.toggle("ag2025-active");

    // Toggle icon
    if (item.classList.contains("ag2025-active")) {
      icon.textContent = "-";
      icon.classList.add("ag2025-minus");
    } else {
      icon.textContent = "+";
      icon.classList.remove("ag2025-minus");
    }
  });
});

function animateNumbers() {
  const counters = document.querySelectorAll(".right-expertise strong");
  const speed = 50; // Lower = Faster

  counters.forEach((counter) => {
    const text = counter.innerText;
    const target = parseInt(text.match(/\d+/)); // Extract number
    let current = 0; // Starting number
    let isPercentage = text.includes("%");
    let isMultiplier = text.includes("x");

    let increment = Math.ceil(target / speed); // Smooth step

    let interval = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target; // Stop at target
        clearInterval(interval);
      }

      // Update text dynamically
      if (isPercentage) {
        counter.innerText = `${current}% ${text.replace(/\d+%?/, "")}`;
      } else if (isMultiplier) {
        counter.innerText = `${current}x ${text.replace(/\d+x?/, "")}`;
      } else {
        counter.innerText = `${current} ${text.replace(/\d+/, "")}`;
      }
    }, 30);
  });
}

// Run animation on page load
window.onload = animateNumbers;
