import React, { useState, useEffect } from 'react'
import Task from './Task'

function Tasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks();
    }, [tasks]);


    const getAllTasks = async () => {

        try {
            await fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => response.json())
                .then((data) => setTasks(data));

        } catch (error) {
            console.log(error);
        }
    }


    const createTask = async () => {

        const task = {
            userId: 1,
            title: 'test title',
            completed: false
        }

        try {
            await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: { 'Content-type': 'application/json; charset=UTF-8', },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(`Task Created. ID:${data.id}, Title: ${data.title}, Completed: ${data.completed}`);
                    alert(`---TASK CREATED---\nID: ${data.id}\nTITLE: ${data.title}\nCOMPLETED: ${data.completed}`);
                });

        } catch (error) {
            console.log(error);
        }
    }


    const updateTask = async (task) => {

        try {
            await fetch('https://jsonplaceholder.typicode.com/todos/' + task.id, {
                method: 'PUT',
                body: JSON.stringify(task),
                headers: { 'Content-type': 'application/json; charset=UTF-8', },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(`Task Updated. ID:${data.id}, Title: ${data.title}, Completed: ${data.completed}`);
                    alert(`---TASK UPDATED---\nID: ${data.id}\nTITLE: ${data.title}\nCOMPLETED: ${data.completed}`);
                });

        } catch (error) {
            console.log(error);
        }
    }


    const completeTask = async (task) => {

        task.completed = true;

        try {
            await fetch('https://jsonplaceholder.typicode.com/todos/' + task.id, {
                method: 'PUT',
                body: JSON.stringify(task),
                headers: { 'Content-type': 'application/json; charset=UTF-8', },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(`Task Completed. ID:${data.id}, Title: ${data.title}, Completed: ${data.completed}`);
                    alert(`---TASK COMPLETED---\nID: ${data.id}\nTITLE: ${data.title}\nCOMPLETED: ${data.completed}`);
                });

        } catch (error) {
            console.log(error);
        }
    }


    const deleteTask = async (id) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, { method: 'DELETE' });
            console.log(`Task Deleted. ID:${id}, Reponse Status: ${response.status}`);
            alert(`Reponse Status: ${response.status} Deleting Task with id: ${id}`);

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container py-4">
            <h2 className='text-center'>Team's To-Do List</h2>
            <button type="button" className="btn btn-primary btn-sm mb-1" onClick={createTask}>New Task</button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USER</th>
                        <th>TITLE</th>
                        <th className="text-center">COMPLETED</th>
                        <th className="text-center">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <Task key={task.id}
                            id={task.id}
                            task={task}
                            updateTask={updateTask}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                        />))}
                </tbody>
            </table>
        </div>
    )
}

export default Tasks