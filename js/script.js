const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

        link.addEventListener("click", (e) => {
                e.preventDefault();

                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");

                console.log("Current page:", link.dataset.page);
        });

});