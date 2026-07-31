// sidebar toggle
document.querySelector("#menue").addEventListener("click", function () {
    document.querySelector(".sidebar").style.display = "flex";
});

document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".sidebar").style.display = "none";
});


// card carousel image hover
let carimages = document.querySelectorAll(".carcard");

for (let i = 0; i < carimages.length; i++) {
    carimages[i].style.transition = "transform 0.3s ease";

    carimages[i].addEventListener("mouseover", function () {
        this.style.transform = "scale(1.2)";
    });

    carimages[i].addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
}


// button styling
let btn = document.querySelectorAll(".discover");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
        this.style.color = "white";
    });

    btn[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
        this.style.color = "";
    });
}


// ********************************************

// dealer img hover
let dealership = document.querySelectorAll(
    ".dealergridsi img, .dealergridsii img, .dealergridsiii img"
);

for (let i = 0; i < dealership.length; i++) {
    dealership[i].style.transition = "transform 0.7s ease";

    dealership[i].addEventListener("mouseover", function () {
        this.style.transform = "scale(1.2)";
    });

    dealership[i].addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
}


// card carousel
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
let visibleCards = getVisibleCards();

function getVisibleCards() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
}

function updateSlider() {
    const maxIndex = Math.max(cards.length - visibleCards, 0);
    if (index > maxIndex) index = maxIndex;
    slider.style.transform = "translateX(-" + (index * (100 / visibleCards)) + "%)";
}

function nextSlide() {
    const maxIndex = cards.length - visibleCards;
    if (index < maxIndex) {
        index = index + 1;
        updateSlider();
    }
}

function prevSlide() {
    if (index > 0) {
        index = index - 1;
        updateSlider();
    }
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

window.addEventListener("resize", function () {
    visibleCards = getVisibleCards();
    updateSlider();
});

updateSlider();


// thumbnail hover -> change header image
let mainImage = document.querySelector("#mainimage");
let thumbs = document.querySelectorAll(".thumbnail img");

thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
        mainImage.src = this.src;

        thumbs.forEach(function (t) {
            t.classList.remove("activeimg");
            t.classList.add("thumb");
        });

        this.classList.remove("thumb");
        this.classList.add("activeimg");
    });
});