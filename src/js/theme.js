export function iniciarTheme() {
  const btnTheme = document.querySelector(".btnTheme");
  let headerTheme = document.getElementById("header");
  const heroTheme = document.getElementById("hero");
  const mainTheme = document.getElementById("main");
  btnTheme.addEventListener("click", () => {
    // page header
    headerTheme.classList.toggle("dark");
    headerTheme.classList.toggle("light");

    // page hero
    heroTheme.classList.toggle("dark");
    heroTheme.classList.toggle("light");

        // page main
    mainTheme.classList.toggle("dark");
    mainTheme.classList.toggle("light");
  });
}
