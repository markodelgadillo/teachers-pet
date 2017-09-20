var students = [
  {id:"1", name: "Melissa", grade:"5", parents: [{name1: "null", name2:"null"}]},
  {id:"2", name: "Jeff", grade: "4", parents: [{name1:"null", name2:"null"}]},
  {id:"3", name: "Vanessa", grade: "6", parents: [{name1:"null", name2:"null"}]}
]
var notes = []
function renderStudentDetails(id) {
  var $studentDetails = document.createElement('div')

  for (var i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      $studentDetails.textContent = students[i].name + ":" + " " +
      "Grade " + students[i].grade
      $studentDetails.appendChild(renderNotesForm(id))
    }
  }
  return $studentDetails
}
function renderNotesForm(id) {
  var $form = document.createElement('form')
  var $text = document.createElement('textarea')
  $text.setAttribute('row', '3')
  $text.setAttribute('maxlength', '300')
  $text.setAttribute('id', 'notes-area')
  var $button = document.createElement('button')
  $button.setAttribute('data-id', id)
  $button.setAttribute('id', 'notes-btn')
  $button.classList.add('button')
  $button.textContent = 'Submit'

  $form.appendChild($text)
  $form.appendChild($button)
  $button.addEventListener('click', function(event) {
    var id = event.target.getAttribute('data-id')
    var note = {
      id: id,
      text: $text.value
    }

    notes.push(note)
  })

  return $form
}
function renderStudentMenu(students) {
  var $menu = document.createElement('ul')
  $menu.textContent = 'Students'
  $menu.setAttribute('id', 'student-menu')

  for (var i = 0; i < students.length; i++) {
    var $li = document.createElement('li')
    $li.setAttribute('class', 'student-btns')
    $li.textContent = students[i].name
    $li.setAttribute('data-id', students[i].id)

    $li.addEventListener('click', function (event) {
      var $details = document.querySelector('#student-details')
      var id = event.target.getAttribute('data-id')

      $details.innerHTML = ''
      $details.appendChild(renderStudentDetails(id))
    })

    $menu.appendChild($li)
  }

  return $menu
}

function showStudentMenu() {
  var $menu = renderStudentMenu(students)
  var $students = document.querySelector('#students')
  $students.appendChild($menu)
}

function swapView(event) {
  var $users = document.querySelector("#container-users")
  $users.classList.toggle("hidden")

  var id = event.target.getAttribute("id")

  switch(id) {
    case "teacher":
      var $teacher = document.querySelector("#teacher-container")
      $teacher.classList.remove("hidden")
      showStudentMenu()
      break;
    case "student":
      var $student = document.querySelector("#student-container")
      $student.classList.remove("hidden")
      break;
    case "parent":
      var $parent = document.querySelector("#parent-container")
      $parent.classList.remove("hidden")
      break;
  }
}

var $users = document.querySelectorAll(".menu1-btns")
for (var i = 0; i < $users.length; i++) {
  $users[i].addEventListener("click", swapView)
}
