document.addEventListener('DOMContentLoaded', function() {
    // Native lazy loading supported? If not, use IntersectionObserver
    if ('loading' in HTMLImageElement.prototype) {
      console.log('Browser supports native lazy loading');
    } else {
      console.log('Using IntersectionObserver fallback');
      const lazyEls = document.querySelectorAll('[loading="lazy"]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // Handle images
            if (el.tagName === 'IMG') {
              el.src = el.dataset.src || el.src;
              if (el.dataset.srcset) el.srcset = el.dataset.srcset;
            }
            // Handle iframes/videos
            if (el.tagName === 'IFRAME') {
              el.src = el.dataset.src;
            }
            observer.unobserve(el);
          }
        });
      }, { rootMargin: '200px' }); // Load 200px before viewport
  
      lazyEls.forEach(el => observer.observe(el));
    }
  });