function toggleThemes(theme) {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const setTheme = (theme) => {
    html.dataset.theme = theme;
  };

  if (currentTheme == 'dark') {
    setTheme('light');
  } else if (currentTheme == 'light' || currentTheme == null) {
    setTheme('dark');
  }
}

export default {
  toggleThemes,
};
