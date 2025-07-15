document.addEventListener("DOMContentLoaded", () => {
  const currentHost = window.location.hostname;

  // Select all <a> with target="_blank"
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach(link => {
    try {
      const url = new URL(link.href);
      if (url.hostname !== currentHost) {
        // Add rel attributes without overwriting existing ones
        let rel = link.getAttribute('rel') || '';
        const relValues = rel.split(' ').filter(Boolean);
        if (!relValues.includes('noreferrer')) relValues.push('noreferrer');
        if (!relValues.includes('noopener')) relValues.push('noopener');
        link.setAttribute('rel', relValues.join(' '));
      }
    } catch (e) {
      // Invalid URL, skip
      console.warn('Invalid URL in link:', link.href);
    }
  });
});
