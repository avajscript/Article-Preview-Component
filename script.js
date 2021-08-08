window.onload = function () {
  const el = document.querySelectorAll(".fas");
  console.log(el);
  const preShare = document.getElementById("pre-share");
  const postShare = document.getElementById("post-share");
  let container = document.querySelector(".container");

  function toggleShare() {
    postShare.style.display == "none"
      ? (postShare.style.display = "flex")
      : (postShare.style.display = "none");

    preShare.style.display == "none"
      ? (preShare.style.display = "block")
      : (preShare.style.display = "none");
  }

  el.forEach((button) => {
    button.addEventListener("click", toggleShare);
  });
};
