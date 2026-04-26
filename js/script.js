const links = document.querySelectorAll(".nav-link");
const slider = document.querySelector(".slider");


// MARK: navigation
links.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(index);
    });
});

const btnEnroll = document.getElementById("btn-enroll");
btnEnroll.addEventListener("click", () => {
    const index = Array.from(links).findIndex(
        link => link.dataset.page === "courses"
    );

    if (index !== -1) {
        navigateTo(index);
    }
});

function navigateTo(index) {
    // MARK: update active state
    links.forEach(l => l.classList.remove("active"));
    links[index].classList.add("active");

    // MARK: move slider
    slider.style.transform = `translateX(-${index * 100}vw)`;

    console.log("Current page:", links[index].dataset.page);
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (this.checkValidity()) {
    const modal = new bootstrap.Modal(document.getElementById("msg-modal"));
    modal.show();
  }

  this.classList.add("was-validated");
});