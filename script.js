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

    function dismissDevelopmentBanner() {
        developmentBanner.classList.add("is-hidden");
    }

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
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
