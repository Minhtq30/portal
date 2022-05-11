if (process.browser) {
  document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const element = document.getElementById("preload");
    element.style.visibility = "hidden";
    element.style.opacity = 0;
  });
}
