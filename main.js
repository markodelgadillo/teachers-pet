

function hide() {
  var $users = document.querySelector("#container-users")
  $users.classList.add("hidden");
}

var $userBtn = document.querySelectorAll(".user-btns")
for (var i = 0; i < $userBtn.length; i++) {
  var add = $userBtn[i].addEventListener("click", hide)
}
