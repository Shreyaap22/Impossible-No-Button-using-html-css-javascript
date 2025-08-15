document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.getElementById("move-random");

  noButton.addEventListener("mouseover", function () {
    const container = document.querySelector(".container");
    const maxWidth = container.clientWidth - noButton.offsetWidth;
    const maxHeight = container.clientHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  });
});
