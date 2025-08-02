
      // Mobile Menu Toggle
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });

          // Close mobile menu if open
          mobileMenu.classList.add("hidden");

          // Update active nav link
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.remove("active");
          });
          this.classList.add("active");
        });
      });

      // Update active nav link on scroll
      window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            document.querySelectorAll(".nav-link").forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${sectionId}`) {
                link.classList.add("active");
              }
            });
          }
        });

        // Show/hide back to top button
        const backToTopButton = document.getElementById("back-to-top");
        if (window.scrollY > 300) {
          backToTopButton.classList.remove("opacity-0", "invisible");
          backToTopButton.classList.add("opacity-100", "visible");
        } else {
          backToTopButton.classList.remove("opacity-100", "visible");
          backToTopButton.classList.add("opacity-0", "invisible");
        }
      });

      // Back to top functionality
      document.getElementById("back-to-top").addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Animate skill bars when they come into view
      const skillBars = document.querySelectorAll(".skill-progress");

      const animateSkillBars = () => {
        skillBars.forEach((bar) => {
          const barPosition = bar.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (barPosition < screenPosition) {
            bar.style.width = bar.parentElement.nextElementSibling.textContent;
          }
        });
      };

      window.addEventListener("scroll", animateSkillBars);
      window.addEventListener("load", animateSkillBars);
    