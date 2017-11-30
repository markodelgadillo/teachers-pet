const users = ['Teacher', 'Student', 'Parent']
const $container = document.querySelector('.container')
const $label = document.createElement('h2')
$label.textContent = 'Teachers P.E.T.'
const $nav = document.createElement('nav')
$nav.setAttribute('class', 'nav')
const $ul = document.createElement('ul')
$ul.setAttribute('class', 'submenu')

$container.appendChild($label)
$container.appendChild($nav)
$nav.appendChild($ul)

function userMenu(users) {
  users.map(user => {
    const $li = document.createElement('li')
    $li.addEventListener('click', selectUser)
    $li.textContent = user
    $li.setAttribute('id', user.toLowerCase())
    $li.setAttribute('class', 'menu1-btns')
    $ul.appendChild($li)
  })
  return $ul
}

function teacherUI() {}

function selectUser(event) {
  const id = event.target.getAttribute('id')

  switch (id) {
    case 'teacher':
      // $container.innerHTML = ''
      console.log(id)
      // add function that renders the teacher UI
      break
    case 'student':
      console.log(id)
      // add function that renders the student UI
      break
    case 'parent':
      console.log(id)
      // add function that renders the parents UI
      break
  }
}

userMenu(users)
