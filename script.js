// Autor: Lello Alberto Zita
// Projeto: Task Manager (To-Do List)

// Seleção dos elementos
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

// Evento de submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value;

  // Criar item da lista
  const li = document.createElement("li");
  li.textContent = taskText;

  // Marcar como concluída
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Botão de remover
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteButton);
  list.appendChild(li);

  // Limpar input
  input.value = "";
});
