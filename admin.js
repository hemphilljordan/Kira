// function editPage(){
//   const email = document.getElementById('email').value
//   const password = document.getElementById('password').value

//   if (email === 'kira@gmail.com' && password === 'password'){ 

//   const loginMenu = document.getElementById('full-page')
//   loginMenu.style.display = 'none';

//   const editPage = document.getElementById('edit-page')
//   editPage.style.display = 'flex';
//   }else{
//     alert('Choose correct Email & Password')
//   }
// }


function editPage(){
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const loginMenu = document.getElementById('full-page')
  loginMenu.style.display = 'none';

  const editPage = document.getElementById('new-page')
  editPage.style.display = 'block';
}

function toHeadshots(){
  window.location.href = "headshots-edit-page.html";
}