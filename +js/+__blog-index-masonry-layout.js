// import { Masonry } from "./masonry.pkgd.min.js";

// init Masonry

window.onload = () => {
  const grid = document.querySelector(".main-inner");

  const masonry = new Masonry(grid, {
    itemSelector: ".post-block",
    gutter: 10,
    horizontalOrder: true,
  });
};
