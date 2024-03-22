function mostrarItem(elemento) {
  let ddItem = elemento.nextElementSibling;
  let buttonDt = elemento.getElementsByTagName("button")[0];

  if (ddItem.style.display === "block") {
    ddItem.style.display = "none";
    buttonDt.removeAttribute("aria-expanded");
  } else {
    ddItem.style.display = "block";
    buttonDt.setAttribute("aria-expanded", "true");
  }
}

/* ##### EVENTOS ##### */

// Pegar todas dt's da dl serviços
dts = document.querySelectorAll("section#servicos dt");

// Para cada dt, adicionar evento de clique
dts.forEach((dt) => {
  dt.addEventListener("click", function () {
    // Função de mostrar item (dd)
    mostrarItem(this);
  });
});
