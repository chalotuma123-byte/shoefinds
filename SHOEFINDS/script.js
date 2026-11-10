const cartCount = document.querySelector('.cart-count');
const addButtons = document.querySelectorAll('.add-btn');
const newsletterForm = document.querySelector('.newsletter-form');

let itemCount = 0;

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    itemCount += 1;
    cartCount.textContent = String(itemCount);

    const originalText = button.textContent;
    button.textContent = 'Added';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 1000);
  });
});

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector('button');
  const input = newsletterForm.querySelector('input');

  if (!input.value.trim()) {
    input.focus();
    return;
  }

  button.textContent = 'Joined';
  button.disabled = true;
  input.value = '';

  setTimeout(() => {
    button.textContent = 'Join now';
    button.disabled = false;
  }, 1400);
});
