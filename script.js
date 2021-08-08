window.onload = function () {
  var el = document
    .querySelector("i")
    .addEventListener("click", function (event) {
      alert("Submit button is clicked!");
      event.preventDefault();
    });
};
