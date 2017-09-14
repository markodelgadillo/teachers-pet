var $users = document.querySelector("#container-users")
var $teacher = document.querySelector("#teacher-container")
var $student = document.querySelector("#student-container")
var $parent = document.querySelector("#parent-container")
var $userBtn = document.querySelectorAll(".menu-btns")

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
