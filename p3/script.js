function addTask() {
  const taskInput = document.getElementById('task');
  const taskList = document.getElementById('taskList');
  if (taskInput.value) {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => taskList.removeChild(li);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}
