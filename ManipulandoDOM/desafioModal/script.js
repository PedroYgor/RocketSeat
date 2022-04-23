let btn = document.getElementById('openModal')
let div = document.querySelector('.fixed')

btn.addEventListener('click', () => {
  div.classList.remove('invisible')
})

document.addEventListener('keyup', e => {
  if (!div.classList.contains('invisible') && e.key === 'Escape')
    div.classList.add('invisible')
})
