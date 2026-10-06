function warningLeave() {
    console.log("The user is leaving the page");
    alert("You are leaving www.johnsilvell.com! Press OK to continue.");
}

document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("current-year");
    const sourceLinks = document.querySelectorAll(".source-warning-link");
    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    const navCollapse = document.getElementById("primary-navigation");
    const developmentBanner = document.getElementById("development-banner");
    const developmentBannerOk = document.getElementById("development-banner-ok");
    const legalNotice = document.getElementById("legal-notice");
    const legalNoticeToggle = document.getElementById("legal-notice-toggle");
    const responsibilityContext = document.getElementById("responsibility-context");
    const responsibilityToggle = document.getElementById("responsibility-toggle");
    const rotatingRole = document.querySelector(".rotating-role");

    function dismissDevelopmentBanner() {
        developmentBanner.classList.add("is-hidden");
    }

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (rotatingRole && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const roles = ["DevOps", "Cloud", "Plattform"];
        let roleIndex = 0;

        window.setInterval(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            rotatingRole.classList.remove("is-changing");
            rotatingRole.textContent = roles[roleIndex];
            void rotatingRole.offsetWidth;
            rotatingRole.classList.add("is-changing");
        }, 2000);
    }

    if (developmentBanner && developmentBannerOk) {
        developmentBannerOk.addEventListener("click", dismissDevelopmentBanner);
    }

    if (legalNotice && legalNoticeToggle) {
        legalNoticeToggle.addEventListener("click", () => {
            const isOpening = legalNotice.hidden;

            legalNotice.hidden = !isOpening;
            legalNoticeToggle.setAttribute("aria-expanded", String(isOpening));
            legalNoticeToggle.textContent = isOpening ? "Hide legal notice" : "Legal notice";
        });
    }

    if (responsibilityContext && responsibilityToggle) {
        responsibilityToggle.addEventListener("click", () => {
            const isOpening = responsibilityContext.hidden;

            responsibilityContext.hidden = !isOpening;
            responsibilityToggle.setAttribute("aria-expanded", String(isOpening));
            responsibilityToggle.textContent = isOpening ? "Show less ←" : "Read more →";
        });
    }

    sourceLinks.forEach((link) => {
        link.addEventListener("click", warningLeave);
    });

    if (navCollapse && window.bootstrap) {
        const collapse = new window.bootstrap.Collapse(navCollapse, {
            toggle: false
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                if (navCollapse.classList.contains("show")) {
                    collapse.hide();
                }
            });
        });
    }
});
