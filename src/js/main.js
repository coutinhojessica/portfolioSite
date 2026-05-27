import {iniciarHeader} from './header.js';
import {iniciarTheme} from './theme.js';

async function carregarComponentes(id, arquivo) {
    const resposta = await fetch(arquivo);
    const html = await resposta.text();

    document.getElementById(id).innerHTML = html;

    if(id === 'header'){
        iniciarHeader();
        iniciarTheme();
    }
}

carregarComponentes('header', './components/header.html');
carregarComponentes('hero', './components/hero.html');
carregarComponentes('footer', './components/footer.html');