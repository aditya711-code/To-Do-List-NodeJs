(function () {
    let tasks = [];
    const addtasksInput = document.getElementById('add');
    const taskCounter = document.getElementById('tasks-counter');
    var ulTag = document.getElementById('list');
    console.log("Workinbg");

    async function fetchTodo() {
        //GET REQUEST
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(function(response){
        //     console.log(response);
        //     return response.json();
        //
        // }).then(function(data){
        //     tasks=data.slice(0,10);
        //     renderList();
        // }).catch(function(error){
        //     console.log('error',error);
        // })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json();
            tasks = data.slice(0, 10);
            renderList();
        } catch (error) {
            console.log(error);
        }

    }

    function addTaskDom(task) {
        var node = document.createElement('li');
        node.innerHTML = `
                <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom_checkbox">
                <label for="${task.id}">${task.title}</label>
                <img src="trash-10-16.jpg" class="delete" data-id="${task.id}">
     `

        ulTag.appendChild(node);

    }

    function renderList() {
        let newTasks = tasks;
        ulTag.innerHTML = '';
        for (let i = 0; i < tasks.length; i++) {
            addTaskDom(tasks[i]);

        }
        taskCounter.innerHTML = tasks.length;
    }

    function markTaskasComplete(taskId) {
        const Tasks = tasks.filter(function (task) {

            return task.id === Number(taskId);
        });
        if (Tasks.length > 0) {
            const currentTask = Tasks[0];
            currentTask.completed = !currentTask.completed;
            renderList();
            showNotification('Task toggled successfully');
            return;
        }
        showNotification('could not toggled the task');
    }

    function deleteTask(taskId) {

        const newTasks = tasks.filter(function (task) {
            return task.id != taskId;
        })
        tasks = newTasks;
        renderList();
        showNotification("task deleted successfully");
    }

    function addTask(task) {
        if (task) {
            tasks.push(task);

            showNotification("task has been added");
            renderList();
            return;
        }
        showNotification("task cannot be added");
    }

    function showNotification(text) {
        return alert(text);

    }

    function handleEventkeypress(e) {
        if (e.key == 'Enter') {
            const text = e.target.value;
            console.log(text);
            if (!text) {
                showNotification('Task cannot be empty');
                return;
            }
            const task = {
                title: text,
                id: Date.now(),
                completed: false
            }
            e.target.value = '';
            addTask(task);
        }
    }

    function handleEventListener(e) {
        const target = e.target;
        if (target.className === 'delete') {

            const targetId = target.dataset.id;
            deleteTask(targetId);
            return;
        } else if (target.className === 'custom_checkbox') {
            console.log('mark');
            const targetId = target.id;
            markTaskasComplete(targetId);
            return;
        }

    }

    function initializeApp() {
        fetchTodo();
        addtasksInput.addEventListener('keyup', handleEventkeypress);
        document.addEventListener('click', handleEventListener);
    }

    initializeApp();
})();
async function fetchPosts() {
    // Write logic here
    try{
        const  posts=await fetch('https://jsonplaceholder.typicode.com/posts');
       const data= await posts.json();
       console.log(data);
    }
    catch(error)
        {
            console.log(error);
        }
}



fetchPosts();