window.onload = function () {
  const el = document.querySelectorAll(".fas");

  const preShare = document.getElementById("pre-share");
  const postShare = document.getElementById("post-share");
  const container = document.querySelector(".container");
  const desktopShare = document.querySelector(".desktop-share");

  console.log(getComputedStyle(container).display);

  function toggleShare() {
    if (getComputedStyle(container).display == "flex") {
      desktopShare.style.display == "none"
        ? (desktopShare.style.display = "flex")
        : (desktopShare.style.display = "none");
    } else {
      postShare.style.display == "none"
        ? (postShare.style.display = "flex")
        : (postShare.style.display = "none");

      preShare.style.display == "none"
        ? (preShare.style.display = "block")
        : (preShare.style.display = "none");
    }
  }

  el.forEach((button) => {
    button.addEventListener("click", toggleShare);
  });
};
