document.addEventListener('DOMContentLoaded', ()=>{
    const newTaskInput =document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');


    addTaskButton.addEventListener('click',() => {
        const taskText = newTaskInput.value.trim();
        if(taskText !== ''){
          const listItem = document.createElement('li');
          listItem.textContent = taskText;
          

          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.addEventListener('click', () => {
            listItem.remove();
          });

          listItem.appendChild(removeButton);
          listItem.addEventListener('click',() => {
            listItem.classList.toggle('completed');
          });
          taskList.appendChild(listItem);
          newTaskInput.value = '';

        }
    });
});