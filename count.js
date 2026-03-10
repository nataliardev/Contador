let contador = document.getElementById("contador");
contador.innerText = localStorage.getItem("contador") || "0";
function incrementar() {
  contador.innerText = parseInt(contador.innerText) + 1;
  salvarContador();
}
function decrementar() {
  contador.innerText = parseInt(contador.innerText) - 1;
  salvarContador();
}
function reiniciar() {
  contador.innerText = "0";
  salvarContador();
}
function salvarContador() {
  localStorage.setItem("contador", contador.innerText);
}
