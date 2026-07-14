// List of your images

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

// Get Elements

const startBtn = document.getElementById("startBtn");
const countdown = document.getElementById("countdown");
const photo = document.getElementById("photo");
const tapText = document.getElementById("tapText");

// Current Image

let current = 0;

// START Button

startBtn.addEventListener("click", function () {

    startBtn.style.display = "none";

    let number = 10;

    countdown.innerHTML = number;

    const timer = setInterval(function () {

        number--;

        if (number >= 0) {

            countdown.innerHTML = number;

        } else {

            clearInterval(timer);

            countdown.style.display = "none";

            tapText.style.display = "block";

            photo.style.display = "block";

            photo.src = photos[current];

        }

    }, 1000);

});

// Change Photo

photo.addEventListener("click", function () {

    current++;

    if (current >= photos.length) {

        current = 0;

    }

    photo.src = photos[current];

});