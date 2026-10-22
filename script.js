// ================= TYPING EFFECT =================

const words = [
    "Web Developer",
    "Frontend Developer",
    "Creative Designer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close mobile menu when clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= SCROLL ANIMATION =================

const sections =
    document.querySelectorAll(
        ".section, .hero-content, .hero-image"
    );

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

sections.forEach(section => {

    observer.observe(section);

});


// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";
        topBtn.style.justifyContent = "center";
        topBtn.style.alignItems = "center";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    const myEmail =
        "YOUR_EMAIL@gmail.com";


    const mailSubject =
        encodeURIComponent(subject);

    const mailBody =
        encodeURIComponent(
            `Hello Mrunmayi,\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `${message}`
        );


    window.location.href =
        `mailto:${myEmail}?subject=${mailSubject}&body=${mailBody}`;

}