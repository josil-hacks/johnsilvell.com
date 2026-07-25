function warningLeave() {
    console.log("The user is leaving the page");
    alert("You are leaving www.johnsilvell.com! Press OK to continue.");
}

document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("current-year");
    const sourceLinks = document.querySelectorAll(".source-warning-link");
    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    const navCollapse = document.getElementById("primary-navigation");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
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
