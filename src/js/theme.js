export function iniciarTheme() {
    const btnTheme = document.querySelector('.btnTheme');
    let headerTheme = document.getElementById('header');
    btnTheme.addEventListener('click', () =>{
        headerTheme.classList.toggle('dark');
        headerTheme.classList.toggle('light');
    })
}