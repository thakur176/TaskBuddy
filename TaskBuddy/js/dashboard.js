// dashboard.js
const user = sessionStorage.getItem('taskbuddy_user');
if(!user){
  window.location.href = 'index.html';
} else {
  document.getElementById('welcomeText').textContent = 'Welcome, ' + user + ' 👋';
}

document.getElementById('logoutBtn').addEventListener('click', function(){
  sessionStorage.removeItem('taskbuddy_user');
  window.location.href = 'index.html';
});
