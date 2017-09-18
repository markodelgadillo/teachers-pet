var students = [
  {id:"1", name: "Melissa", grade:"5", notes: [{Notes: "null"}], parents: [{name1: "null", name2:"null"}]},
  {id:"2", name: "Jeff", grade: "4", notes: [{Notes: "null"}], parents: [{name1:"null", name2:"null"}]},
  {id:"3", name: "Vanessa", grade: "6", notes: [{Notes: "null"}], parents: [{name1:"null", name2:"null"}]}
]

var $div = document.createElement('div')
var $menu = document.getElementById('student-menu')
$menu.textContent = "Students"

for (var i = 0; i < students.length; i++) {
  var $li = document.createElement('li')
  $li.setAttribute('class', 'student-btns')
  $li.textContent = students[i].name
  $li.setAttribute('data-id', students[i].id) //here!
  $menu.appendChild($li)
}

function addName(event) {
  var id = event.target.getAttribute('data-id')
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === id) {
       var $studentDetails = document.createElement('div')
       $studentDetails.textContent = students[i].name + ":" + " " +
       "Grade " + students[i].grade
       var $details = document.querySelector('.student-details')
       $details.innerHTML = ''
       $details.appendChild($studentDetails)
    }
  }
}

var $li = document.querySelectorAll('.student-btns')
  for (var i = 0; i < students.length; i++) {
    $li[i].addEventListener('click', addName)
  }

var $users = document.querySelector("#container-users")
var $teacher = document.querySelector("#teacher-container")
var $student = document.querySelector("#student-container")
var $parent = document.querySelector("#parent-container")
var $userBtn = document.querySelectorAll(".menu1-btns")

function hide(event) {
  $users.classList.toggle("hidden")
  var id = event.target.getAttribute("id")
    for (var i = 0; i < $userBtn.length; i++) {
      if (id === "teacher"){
          $teacher.classList.toggle("hidden")
      } else if (id === "student") {
          $student.classList.toggle("hidden")
        } else {
          $parent.classList.toggle("hidden")
        }
    }
}

for (var i = 0; i < $userBtn.length; i++) {
  $userBtn[i].addEventListener("click", hide)
}

function setParent() {
  var $info = document.getElementById("p-info-input")
  var set = $info.value
  var $set = document.createElement('p')
  $set.textContent = set
  $form.innerHTML = ""
  $form.appendChild($set)
}

var $info = document.getElementById("p-info-input")
var $form = document.getElementById("parent-form")
var $parentBtn = document.getElementById('p-info-button')
$parentBtn.addEventListener("click", setParent)

var formTypes = [
  {id:'1', name:'Notes to student'},
]

var $hwDiv = document.querySelector('#forms')

for (var i = 0; i < formTypes.length; i++) {
  var $hwForm = document.createElement('form')
  $hwForm.setAttribute('method', 'post')
  $hwForm.setAttribute('data-id', formTypes[i].id)
  var $label = document.createElement('label')
  $label.innerHTML = formTypes[i].name
  var $text = document.createElement('textarea')
  $text.setAttribute('rows', '3')
  $text.setAttribute('maxlength', '300')
  $text.setAttribute('class', 'notes')
  $hwDiv.appendChild($hwForm)
  $hwForm.appendChild($label)
  $hwForm.appendChild($text)
}

var $button = document.createElement('input')
$button.setAttribute('class', 'button')
$button.setAttribute('type', 'submit')
$hwForm.appendChild($button)

$button.addEventListener('click', function () {
  if ($button.id === 'teacherBtn') {
    var notes = document.querySelectorAll('[data-id]')
    var value = notes[1].value
    var hw = document.createElement('p')
    hw.textContent = value
    $hwform.appendChild(hw)
    return btnId("teacherBtn")
  } else if ($button.id === 'studentBtn') {
    }
})
