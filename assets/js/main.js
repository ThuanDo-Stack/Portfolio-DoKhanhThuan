document.addEventListener('DOMContentLoaded', () => {
  // --- Dark Mode Toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
  });

  // --- Project Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projects.forEach(project => {
        if (filterValue === 'all') {
          project.style.display = 'block';
        } else {
          const tags = project.getAttribute('data-tags');
          if (tags && tags.includes(filterValue)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        }
      });
    });
  });
});
