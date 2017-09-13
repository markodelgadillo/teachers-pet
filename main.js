

function hide() {
  var $users = document.querySelector("#containerUsers")
  $users.classList.add("hidden");
}

var $userBtn = document.querySelectorAll(".userBtn")
for (var i = 0; i < $userBtn.length; i++) {
  var add = $userBtn[i]
  add.addEventListener("click", hide)
}
