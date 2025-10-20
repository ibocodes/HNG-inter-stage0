// ====== FOLLOW BUTTON TOGGLE ======
const followBtn = document.querySelector('[data-testid="follow-button"]');
const timeElement = document.querySelector('[data-testid="test-user-time"]');


if (followBtn) {
  followBtn.addEventListener("click", () => {
    // Check current button text
    const isFollowing = followBtn.textContent.trim() === "Following";

    // Toggle the text
    if (isFollowing) {
      followBtn.textContent = "Follow";
      followBtn.style.backgroundColor = "#0077ff"; // blue
    } else {
      followBtn.textContent = "Following";
      followBtn.style.backgroundColor = "#074ea0ff"; // green
    }
  });
}


if (timeElement) {
  const updateTime = () => {
    timeElement.textContent = Date.now();
  };

  // Run once when page loads
  updateTime();

  // Optional: Update every second (can remove if not needed)
  setInterval(updateTime, 1000);
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const success = document.getElementById("success");

  // Clear old messages
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  success.textContent = "";

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    document.getElementById("error-name").textContent = "Full name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    document.getElementById("error-email").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    document.getElementById("error-email").textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Subject validation
  if (subject.value.trim() === "") {
    document.getElementById("error-subject").textContent = "Subject is required.";
    isValid = false;
  }

  // Message validation
  if (message.value.trim() === "") {
    document.getElementById("error-message").textContent = "Message is required.";
    isValid = false;
  } else if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  // If all valid
  if (isValid) {
    success.textContent = "Message sent successfully!";
    success.style.color = "green";

    // Optional: reset form after success
    this.reset();
  }
});

