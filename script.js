document.addEventListener("DOMContentLoaded", () => {
  const toggleTheme = document.getElementById("toggleTheme");
  toggleTheme.addEventListener("click", function () {
    if (document.documentElement.classList.includes("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  });
});
