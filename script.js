const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const buttonContainer = document.querySelector(".button-container");


let imgCount = 1;
let last = imgCount;



// round nav button

for (let i = 0; i < images.length; i++) {
  const div = document.createElement("div");
  div.className = "round";
  buttonContainer.append(div);
  console.log(buttonContainer);
}

const round = document.querySelectorAll(".round");

const removeBg = () => {
  round.forEach((round) => {
    round.style.backgroundColor = "transparent";
  });
}

round[0].style.backgroundColor = "white";

round.forEach((round, i) => {
  round.addEventListener("click", () => {
    slider.style.transform = `translateX(-${(i) * 448}px)`;
    imgCount = i + 1;
    removeBg();
    round.style.backgroundColor = "white";
  })
});



// right arrow

right[0].addEventListener("click", () => {
  if (imgCount < images.length) {
    slider.style.transform = `translateX(-${imgCount * 448}px)`;
    imgCount = imgCount + 1;
  }

  else {
    slider.style.transform = `translateX(0px)`;
    imgCount = 1;
  }
  removeBg();
  round[imgCount -1].style.backgroundColor = "white";
});


// left button
const prevImg = () => {
  slider.style.transform = `translateX(-${(imgCount - 2) * 448}px)`;
  imgCount = imgCount - 1;
}

const lastImg = () => {
  slider.style.transform = `translateX(-${(images.length - 1) * 448}px)`;
  imgCount = images.length;
}
left[0].addEventListener("click", () => {
  imgCount > 1 ? prevImg() : lastImg();

  removeBg();
  round[imgCount -1].style.backgroundColor = "white";
});


