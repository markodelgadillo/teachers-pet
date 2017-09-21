var students = [
  {id:"1", name: "Melissa", grade:"5"},
  {id:"2", name: "Jeff", grade: "4"},
  {id:"3", name: "Vanessa", grade: "6"}
]
var notes = []
function renderStudentDetails(id) {
  var $studentDetails = document.createElement('div')
  var $studentName = document.createElement('p')
  var $studentGrade = document.createElement('p')
  var $studentColor = document.createElement('p')
  var $linebreak = document.createElement('br')

  for (var i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      $studentName.textContent = students[i].name
      $studentName.appendChild($linebreak)
      $studentGrade.textContent = students[i].grade + 'th' + ' ' + 'Grade'
      $studentGrade.appendChild($linebreak)

      $studentDetails.appendChild($studentName)
      $studentDetails.appendChild($studentGrade)
      $studentDetails.appendChild(renderNotesForm(id))
      $studentDetails.appendChild(renderParentInfo(id))
    }
  }
  return $studentDetails
  //append inputs here
}

function renderNotesForm(id) {
  var $form = document.createElement('form')
  var $label = document.createElement('label')
  $label.setAttribute('id', 'student-notes-label')
  $label.textContent = 'Notes'
  var $text = document.createElement('textarea')
  $text.setAttribute('row', '3')
  $text.setAttribute('maxlength', '300')
  $text.setAttribute('id', 'notes-area')
  var $button = document.createElement('button')
  $button.setAttribute('data-id', id)
  $button.setAttribute('id', 'notes-btn')
  $button.classList.add('button')
  $button.textContent = 'Submit'

  $form.appendChild($label)
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
      var $parentInfo = document.querySelector('#parent-info')
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

//NEW CODE STARTS here
//function to render the parent info box
function renderParentInfo (id) { //have it render at click of student name
  var $container = document.createElement('form')
  $container.setAttribute('id', 'parent-info')
  $container.textContent = "Parent Information:"

  var $label1 = document.createElement('label')
  $label1.setAttribute('id', 'pName')
  $label1.classList.add('labels')
  $label1.textContent = "Name"
  var $pName = document.createElement('input')
  $pName.setAttribute('type', 'text')
  $pName.setAttribute('id', 'parent-name')
  $pName.classList.add('parent-inputs')


  var $label2 = document.createElement('label')
  $label2.setAttribute('id', 'pPhone')
  $label2.classList.add('labels')
  $label2.textContent = "Phone"
  var $pPhone = document.createElement('input')
  $pPhone.setAttribute('type', 'tel')
  $pPhone.setAttribute('id', 'parent-phone')
  $pPhone.classList.add('parent-inputs')

  var $label3 = document.createElement('label')
  $label3.setAttribute('id', 'pAddress')
  $label3.classList.add('labels')
  $label3.textContent = "Address"
  var $pAddress = document.createElement('input')
  $pAddress.setAttribute('type', 'address')
  $pAddress.setAttribute('id', 'parent-address')
  $pAddress.classList.add('parent-inputs')

  var $pButton = document.createElement('button')
  $pButton.setAttribute('data-id', id)
  $pButton.setAttribute('id', 'parent-button')
  $pButton.classList.add('button')
  $pButton.textContent = 'Set'

  $container.appendChild($label1)
  $container.appendChild($pName)
  $container.appendChild($label2)
  $container.appendChild($pPhone)
  $container.appendChild($label3)
  $container.appendChild($pAddress)
  $container.appendChild($pButton)

  $pButton.addEventListener('click', function(event){
    var id = event.target.getAttribute('data-id')
    var info = {
      id: id,
      name: $pName.value,
      phone: $pPhone.value,
      address: $pAddress.value
    }

    $container.innerHTML = '' //after submit click, make it disappear
    parents.push(info)
    $container.appendChild(newParents())

    })
    return $container

  }



var parents = []


function newParents() {
  var $parentsBox = document.createElement('div')
  $parentsBox.setAttribute('id', 'parents-box')
  var $name = document.createElement('p')
  var $phone = document.createElement('p')
  var $address = document.createElement('p')
  $parentsBox.appendChild($name)
  $parentsBox.appendChild($address)
  $parentsBox.appendChild($phone)

  $name.textContent = parents[0].name
  $phone.textContent = parents[0].phone
  $address.textContent = parents[0].address
  return $parentsBox

}

function setNewParents () {

}
