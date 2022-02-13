const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Query must be filled out");
    return false;
  }
  else{
	alert("Your Query is submitted successfully.");
	window.open('https://abhiakme.github.io/Hacknitp4.0/index.html',"_self");
  }
}
