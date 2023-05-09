const form = document.getElementById("contact-form");

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  form.reset();
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70;
    const sectionBottom = sectionTop + section.clientHeight;

    if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
      const id = section.getAttribute("id");
      removeActiveClass();
      addActiveClass(id);
    }
  });
});

function removeActiveClass() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

function addActiveClass(id) {
  const activeLink = document.querySelector(`nav a[href="#${id}"]`);
  activeLink.classList.add("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const id = link.getAttribute("href");
    const targetSection = document.querySelector(id);
    scrollToSection(targetSection);
  });
});

function scrollToSection(section) {
  const sectionTop = section.offsetTop - 70;
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
}
