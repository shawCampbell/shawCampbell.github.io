document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const icon = btn.querySelector('i');

  // 1. Restore theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (icon) {
      icon.classList.remove('bi-moon-stars');
      icon.classList.add('bi-sun');
    }
  }

  // 2. Toggle + save theme
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (icon) {
      icon.classList.toggle('bi-moon-stars');
      icon.classList.toggle('bi-sun');
    }
  });
});

