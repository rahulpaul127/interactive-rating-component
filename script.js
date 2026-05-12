document.addEventListener('DOMContentLoaded', () => {
  const ratingButtons = document.querySelectorAll('.rating-btn');
  const submitButton = document.getElementById('submit-btn');
  const ratingState = document.getElementById('rating-state');
  const thankYouState = document.getElementById('thank-you-state');
  const selectedRatingSpan = document.getElementById('selected-rating');

  let selectedRating = null;

  // Handle rating selection
  ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      ratingButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Store the selected rating value
      selectedRating = button.getAttribute('data-value');
    });
  });

  // Handle form submission
  submitButton.addEventListener('click', () => {
    if (selectedRating) {
      // Update the rating text
      selectedRatingSpan.textContent = selectedRating;
      
      // Hide rating state and show thank you state
      ratingState.classList.add('hidden');
      thankYouState.classList.remove('hidden');
    } else {
      // Optional: Add some visual feedback if they try to submit without rating
      // For this simple project, we'll just ignore the click
      ratingButtons.forEach(btn => {
        btn.style.transform = 'scale(1.1)';
        setTimeout(() => {
          btn.style.transform = 'scale(1)';
        }, 200);
      });
    }
  });
});
