setMode();

document.getElementById("dark").addEventListener("click", function () {
  document.getElementById("dark").classList.add("hidden");
  document.getElementById("light").classList.remove("hidden");
  localStorage.theme = "dark";
  setMode();
});
document.getElementById("light").addEventListener("click", function () {
  document.getElementById("light").classList.add("hidden");
  document.getElementById("dark").classList.remove("hidden");
  localStorage.theme = "light";
  setMode();
});

function setMode() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.getElementById("dark").classList.add("hidden");
    document.getElementById("light").classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    document.getElementById("light").classList.add("hidden");
    document.getElementById("dark").classList.remove("hidden");
  }
}
