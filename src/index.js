const hambugerbtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
console.log(hambugerbtn, navList)

function toggleBtn() {
   navList.classList.toggle('show')
}


hambugerbtn.addEventListener('click', toggleBtn)