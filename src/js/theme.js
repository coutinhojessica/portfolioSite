export function iniciarTheme() {
  const btnTheme = document.querySelector(".btnTheme");
  let headerTheme = document.getElementById("header");
  const heroTheme = document.getElementById("hero");
  btnTheme.addEventListener("click", () => {
    // page header
    headerTheme.classList.toggle("dark");
    headerTheme.classList.toggle("light");

    // page hero
    heroTheme.classList.toggle("dark");
    heroTheme.classList.toggle("light");
  });
}
