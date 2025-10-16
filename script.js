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
