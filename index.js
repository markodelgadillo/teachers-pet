const users = ['Teacher', 'Student', 'Parent']
const $container = document.querySelector('.container')
const $label = document.createElement('h2')
$label.textContent = 'Teachers P.E.T.'
const $nav = document.createElement('nav')
const $ul = document.createElement('ul')

$container.appendChild($label)
$container.appendChild($nav)
$nav.appendChild($ul)

function userMenu(users) {
  users.map(user => {
    const $li = document.createElement('li')
    $li.addEventListener('click', selectUser)
    $li.textContent = user
    $li.setAttribute('class', user.toLowerCase())
    $ul.appendChild($li)
  })
  return $ul
}

function selectUser(event) {
  const id = event.target.getAttribute('class')

  switch (id) {
    case 'teacher':
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