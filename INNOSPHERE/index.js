let currentIndex = 0;
  const cards = document.querySelectorAll('.card');

  function showNextCard() {
    // Remove active class from current card
    cards[currentIndex].classList.remove('active');
    cards[currentIndex].classList.add('fade-out');
    
    // Update index
    currentIndex = (currentIndex + 1) % cards.length;

    // Show the next card
    cards[currentIndex].classList.remove('fade-out');
    cards[currentIndex].classList.add('active');
  }

  // Change card every 3 seconds
  setInterval(showNextCard, 3000);

  // --------------------------------------------------------------

  