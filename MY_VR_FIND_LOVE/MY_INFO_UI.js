// Get all project buttons
const projectButtons = document.querySelectorAll('.project-btn');
const myliuyanButtons = document.querySelectorAll('.project-btn-my-liuyan')

const vrchatButton = document.querySelector('.myvrchat-btn');
const vrchatDetails = document.querySelector('.vrchat-details');

// Add click event listener to each project button
projectButtons.forEach(button => {
  button.addEventListener('click', function() {
    const details = this.nextElementSibling;

    // Toggle visibility of the project details
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  });
});

// Add click event listener to each project button
myliuyanButtons.forEach(button => {
  button.addEventListener('click', function() {
    const details = this.nextElementSibling;

    // Toggle visibility of the project details
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  });
});

// Add click event listener to the VRChat button
vrchatButton.addEventListener('click', function() {
  // Show the hidden message for the VRChat button
  vrchatDetails.style.display = 'block';

  // After a 3-second delay, redirect to the VRChat user profile
  setTimeout(() => {
    window.location.href = 'https://vrchat.com/home/user/usr_9737e3da-ce01-4220-b2b6-52dca40a286c';
  }, 1900); // 3 seconds delay before redirection
});
