// Create transition overlay
const transitionEl = document.createElement('div');
transitionEl.className = 'page-transition';
document.body.appendChild(transitionEl);

// Fade in on initial load
window.addEventListener('load', () => {
  transitionEl.style.opacity = 0;
  setTimeout(() => transitionEl.remove(), 300);
});

// Fade out before navigation
document.querySelectorAll('a[href^="' + window.location.origin + '"]').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.target !== '_blank' && !link.classList.contains('no-transition')) {
      e.preventDefault();
      transitionEl.style.opacity = 1;
      setTimeout(() => window.location.href = link.href, 300);
    }
  });
});