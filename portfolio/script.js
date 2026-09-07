// =====================================================
// MOBILE MENU
// =====================================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// =====================================================
// CLOSE MOBILE MENU
// =====================================================

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// =====================================================
// ACTIVE NAVIGATION
// =====================================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            current = section.id;

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Please complete all fields.");

        return;

    }


    alert(
        `Thanks, ${name}! Your message has been received.`
    );


    contactForm.reset();

});


// =====================================================
// HELP BUTTON
// =====================================================

const helpBtn =
    document.getElementById("helpBtn");


helpBtn.addEventListener("click", () => {

    alert(
        "Welcome to my portfolio! Use the navigation above to explore my work."
    );

});


// =====================================================
// BUTTON PRESS ANIMATION
// =====================================================

const buttons =
    document.querySelectorAll(".button");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.97)";

        setTimeout(() => {

            button.style.transform = "";

        }, 120);

    });

});