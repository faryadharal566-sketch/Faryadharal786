
/* =========================================
   ADNAN NASIR PORTFOLIO
   PART 3: JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const scrollProgress = document.getElementById("scrollProgress");
  const currentYear = document.getElementById("currentYear");

  // 1. Automatic footer year
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // 2. Mobile navigation
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );

      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
  }

  // 3. Sticky navbar effect + scroll progress
  let scrollScheduled = false;

  function updateScrollUI() {
    const scrollTop =
      window.scrollY || document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (header) {
      header.classList.toggle("scrolled", scrollTop > 30);
    }

    if (scrollProgress) {
      const progress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      scrollProgress.style.width = `${Math.min(progress, 100)}%`;
    }

    scrollScheduled = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollScheduled) {
        window.requestAnimationFrame(updateScrollUI);
        scrollScheduled = true;
      }
    },
    { passive: true }
  );

  updateScrollUI();

  // 4. Reveal elements as they enter the viewport
  const revealElements = document.querySelectorAll(".reveal");

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  // 5. Animate skill bars when visible
  const skillItems = document.querySelectorAll(".skill-item");

  skillItems.forEach((item) => {
    const level = Number(item.dataset.level);
    const bar = item.querySelector(".skill-track span");

    if (!bar || !Number.isFinite(level)) return;

    const safeLevel = Math.max(0, Math.min(100, level));
    bar.style.setProperty("--skill-level", `${safeLevel}%`);
  });

  if ("IntersectionObserver" in window && !reducedMotion) {
    const skillObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    skillItems.forEach((item) => skillObserver.observe(item));
  } else {
    skillItems.forEach((item) => item.classList.add("animated"));
  }

  // 6. Active navbar link based on the visible section
  const sections = document.querySelectorAll("main section[id]");
  const pageLinks = document.querySelectorAll(".nav-link");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          pageLinks.forEach((link) => {
            const matches =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("active", matches);
          });
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // 7. Contact form opens the visitor's email application
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);

      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "").trim();
      const message = String(formData.get("message") || "").trim();

      // Replace this with your actual email address.
      const recipient = "your-email@example.com";

      const emailSubject = encodeURIComponent(
        subject || `Portfolio inquiry from ${name}`
      );

      const emailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      window.location.href =
        `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
    });
  }

  // 8. Prevent placeholder links from jumping to the top
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  // 9. Close mobile menu if the screen becomes wider
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && navLinks && menuToggle) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});
