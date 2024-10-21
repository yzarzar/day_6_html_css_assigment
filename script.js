document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  // Toggle the menu
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      menu.classList.contains("active") &&
      !menu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menu.classList.remove("active");
    }
  });

  // Scroll to header when up-arrow is clicked
  document.querySelector(".up-arrow").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Select all heart icons using the class and add click event to each
  const heartIcons = document.querySelectorAll(".fv-icon");
  heartIcons.forEach(function (heartIcon) {
    heartIcon.addEventListener("click", function () {
      const currentSrc = heartIcon.src;

      // Get the file name only (ignoring full path)
      const fileName = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);

      // Toggle between the two images
      if (fileName === "heart.png") {
        heartIcon.src = "/assets/images/red-heart.png"; // New image
      } else {
        heartIcon.src = "/assets/images/heart.png"; // Original image
      }
    });
  });
});
