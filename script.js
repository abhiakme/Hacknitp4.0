const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
function showNotification(){
    const notification =new Notification("new massage from abhi",{
        body:"hey,friends how r u"
        )};
     }
        
console.log(Notification.permission):

 if(Notification.permission === "granted"){
     alert("we have permission");
 }else if(Notification.permission !== "denied"){
     Notification.requestPermission().then(permission =>{
         console.log(permission);
     }):
  }

