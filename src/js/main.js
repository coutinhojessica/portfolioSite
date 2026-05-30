import { iniciarHeader } from "./header.js";
import { iniciarTheme } from "./theme.js";

async function carregarComponentes(id, arquivo) {
  const resposta = await fetch(arquivo);
  const html = await resposta.text();

  document.getElementById(id).innerHTML = html;

  if (id === "header") {
    iniciarHeader();
    iniciarTheme();
  }
}

carregarComponentes("header", "./components/header.html");
carregarComponentes("hero", "./components/hero.html");
carregarComponentes("footer", "./components/footer.html");

const slides = document.querySelector(".slidess");
const slidesImagens = document.querySelectorAll(".slides");

const btnEsquerda = document.querySelector(".esquerda");
const btnDireita = document.querySelector(".direita");

let index = 0;

btnEsquerda.addEventListener("click", () => {
  index--;
  console.log(index);
  if (index < 0) index = slidesImagens.length - 1;
  atualizarCarrossel();
});

btnDireita.addEventListener("click", () => {
  index++;
  console.log(index);
  if (index > slidesImagens.length - 1) index = 0;
  atualizarCarrossel();
});

const atualizarCarrossel = () => {
  slidesImagens.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
};

function msgSucesso() {
  Swal.fire({
    title: "Mensagem enviada com sucesso!",
    icon: "success",
  });
}

function msgsErro() {
  Swal.fire({
    title: "Mensagem inválida",
    icon: "error",
  });
}

emailjs.init("EiN9AxEeS7GDOYPWl");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs
    .sendForm("service_9k7icqo", "template_52xjmgr", this)
    .then(() => {
      msgSucesso();

      form.reset();
    })
    .catch((error) => {
     msgsErro();

      console.log(error);
    });
});
