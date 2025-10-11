const bar = document.querySelector("#bar"),
  nav = document.querySelector("#navbar");

bar.addEventListener("click", (e) => {
  nav.classList.toggle("nav_open");

  if (bar.classList.contains("fa-bars")) {
    bar.classList.remove("fa-bars");
    bar.classList.add("fa-xmark");
  } else {
    bar.classList.remove("fa-xmark");
    bar.classList.add("fa-bars");
  }
});
