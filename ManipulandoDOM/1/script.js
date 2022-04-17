let inputTarefa = document.getElementById('tarefa')
let btnTarefa = document.getElementById('btn-tarefa')
let lista = document.getElementById('list-tarefas')

btnTarefa.addEventListener('click', e => {
  let li = document.createElement('li')
  li.setAttribute('class', 'li-tarefa')
  let texto = inputTarefa.value
  li.innerText = texto
  lista.appendChild(li)

  let btn = document.createElement('button')
  btn.setAttribute('class', 'li-btn')
  btn.textContent = 'Apagar'
  li.appendChild(btn)

  inputTarefa.value = '';
})

document.addEventListener('click', e => {
  const el = e.target
  if (el.classList.contains('li-btn')) {
    el.parentElement.remove()
  }
})
