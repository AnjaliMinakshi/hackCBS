  // Toggle the description visibility
  function toggleDescription(element) {
    const description = element.previousElementSibling.querySelector('.hidden');
    if (description.style.display === 'inline') {
        description.style.display = 'none';
        element.textContent = 'Read more';
    } else {
        description.style.display = 'inline';
        element.textContent = 'Read less';
    }
}