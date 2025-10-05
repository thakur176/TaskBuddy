
const form = document.getElementById('loginForm');
const errorEl = document.getElementById('error');

form.addEventListener('submit', function(e){
  e.preventDefault();
  errorEl.hidden = true;

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if(!username || !password){
    showError('Please enter both username and password.');
    return;
  }

  // Check credentials from localStorage
  const users = JSON.parse(localStorage.getItem('taskbuddy_users') || '{}');
  if(users[username] && users[username] === password){
    sessionStorage.setItem('taskbuddy_user', username);
    window.location.href = 'dashboard.html';
  } else {
    showError('Invalid username or password.');
  }
});

function showError(msg){
  errorEl.textContent = msg;
  errorEl.hidden = false;
  errorEl.animate([{ transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], {
    duration: 400, iterations: 1
  });
}
