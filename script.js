// Sign Up
document.getElementById('signUpBtn').addEventListener('click', () => {
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => alert('Signed up successfully!'))
    .catch(err => alert(err.message));
});

// Sign In
document.getElementById('signInBtn').addEventListener('click', () => {
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => alert('Signed in!'))
    .catch(err => alert(err.message));
});

// Sign Out
document.getElementById('signOutBtn').addEventListener('click', () => {
  firebase.auth().signOut();
});

// Track Auth State
firebase.auth().onAuthStateChanged(user => {
  const authSection = document.querySelector('.auth-section');
  const inputSection = document.querySelector('.input-section');
  const taskList = document.getElementById('taskList');
  const signOutBtn = document.getElementById('signOutBtn');

  if (user) {
    authSection.style.display = 'none';
    inputSection.style.display = 'block';
    taskList.style.display = 'block';
    signOutBtn.style.display = 'inline-block';
  } else {
    authSection.style.display = 'block';
    inputSection.style.display = 'none';
    taskList.style.display = 'none';
    signOutBtn.style.display = 'none';
  }
});

// Task Logic
document.getElementById('addBtn').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.className = 'task-text';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(taskSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
});