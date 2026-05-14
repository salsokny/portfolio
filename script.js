/**
 * Sal Sokny - Portfolio
 * Interactive behaviors and animations
 */

const runPortfolioScripts = () => {
  initMobileNav();
  initSmoothScroll();
  initSkillBars();
  initScrollAnimations();
  initNavbarScroll();
  initProjectToggles();
  initThemeSwitcher();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runPortfolioScripts);
} else {
  runPortfolioScripts();
}

/**
 * Mobile navigation toggle
 */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/**
 * Animate skill bars when they come into view
 */
function initSkillBars() {
  const skillFills = document.querySelectorAll(".skill-fill");
  const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute("data-level") || 0;
        entry.target.style.width = `${level}%`;
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  skillFills.forEach((fill) => observer.observe(fill));
}

/**
 * Fade-in animations on scroll
 */
function initScrollAnimations() {
  const animateElements = document.querySelectorAll(
    ".hero-content, .section, .section-title, .about-grid, .about-content, .about-image, .about-details, .about-hobbies, .timeline-item, .project-card, .project-card-body, .project-block, .skill-card, .course-card, .edu-item",
  );

  if (!animateElements.length) return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -20px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-visible");
        // If it's a timeline-item, animate its list items all at once
        if (entry.target.classList.contains("timeline-item")) {
          const listItems = entry.target.querySelectorAll(
            ".timeline-content ul li",
          );
          listItems.forEach((li) => {
            li.classList.add("scroll-visible");
          });
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach((el, i) => {
    el.classList.add("scroll-hidden");
    if (el.classList.contains("scroll-from-right")) {
      el.classList.add("scroll-transform-right");
    } else if (el.classList.contains("scroll-from-left")) {
      el.classList.add("scroll-transform-left");
    }
    el.style.transitionDelay = `${(i * 0.05).toFixed(2)}s`;
    observer.observe(el);
  });

  // Initially hide timeline list items
  document.querySelectorAll(".timeline-content ul li").forEach((li) => {
    li.classList.add("scroll-hidden");
  });
}

/**
 * Project card details toggle
 */
function initProjectToggles() {
  document.querySelectorAll(".project-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const details = document.getElementById(targetId);
      if (!details) return;

      const isOpen = details.classList.contains("is-open");
      details.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", !isOpen);
      btn.textContent = !isOpen ? "Hide details" : "View details";
    });
  });
}

/**
 * Theme switcher (Light / Dark / Night Light)
 */
function initThemeSwitcher() {
  const html = document.documentElement;
  const themeBtns = document.querySelectorAll(".theme-btn");

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    themeBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-theme") === theme);
    });
    // Update navbar immediately when theme changes
    window.dispatchEvent(new Event("scroll"));
  }

  themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTheme(btn.getAttribute("data-theme"));
    });
  });

  // Set initial active state
  const currentTheme = html.getAttribute("data-theme") || "dark";
  themeBtns.forEach((btn) => {
    btn.classList.toggle(
      "active",
      btn.getAttribute("data-theme") === currentTheme,
    );
  });
}

/**
 * Navbar background on scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  const handleScroll = () => {
    const theme = document.documentElement.getAttribute("data-theme") || "dark";
    const navBg = getComputedStyle(document.documentElement)
      .getPropertyValue("--nav-bg-scrolled")
      .trim();
    const navBgDefault = getComputedStyle(document.documentElement)
      .getPropertyValue("--nav-bg")
      .trim();
    navbar.style.background = window.scrollY > 50 ? navBg : navBgDefault;
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
}
