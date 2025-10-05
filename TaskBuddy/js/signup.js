const signupForm = document.getElementById('signupForm');
const signupError = document.getElementById('signupError');

signupForm.addEventListener('submit', function(e){
  e.preventDefault();
  signupError.hidden = true;

  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value;

  if(!username || !password){
    showError('Please enter both username and password.');
    return;
  }

  // Check if username already exists
  const users = JSON.parse(localStorage.getItem('taskbuddy_users') || '{}');
  if(users[username]){
    showError('Username already exists. Try a different one.');
    return;
  }

  // Save new user
  users[username] = password;
  localStorage.setItem('taskbuddy_users', JSON.stringify(users));

  alert('✅ Account created successfully! You can now login.');
  window.location.href = 'index.html';
});

function showError(msg){
  signupError.textContent = msg;
  signupError.hidden = false;
  signupError.animate([{ transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], {
    duration: 400, iterations: 1
  });
}
