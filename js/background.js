const images = ["bg_01.jpeg", "bg_02.jpeg", "bg_03.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.id = "bgImage";