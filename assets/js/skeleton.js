// Convert images/iframes to skeletons while loading
document.querySelectorAll('img, iframe').forEach(el => {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton';
    
    // Copy dimensions
    skeleton.style.width = el.offsetWidth + 'px';
    skeleton.style.height = el.offsetHeight + 'px';
    
    // Insert skeleton before element
    el.parentNode.insertBefore(skeleton, el);
    
    // Remove skeleton when loaded
    el.addEventListener('load', () => skeleton.remove());
    el.addEventListener('error', () => skeleton.remove()); // Fallback
  });
  
  // Optional: Add shimmer animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shimmer {
      0% { background-position: -468px 0; }
      100% { background-position: 468px 0; }
    }
    .skeleton {
      background: #f6f7f8;
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );
      background-repeat: no-repeat;
      animation: shimmer 1.5s infinite linear;
    }
  `;
  document.head.appendChild(style);