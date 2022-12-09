import React, { useState, useEffect } from 'react'

function Task(props) {

    const [task, setTask] = useState({
        id: '',
        userId: '',
        title: '',
        completed: ''
    });


    useEffect(() => {
        setTask(props.task);
    }, []);


    return (
        <tr>
            <td>{task.id}</td>
            <td>{task.userId}</td>
            <td><input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} className="title-desc"></input></td>
            <td className="text-center">{task.completed && <i data-testid='task-completed' className="fa fa-check-circle-o" aria-hidden="true"></i>}</td>
            <td className="text-center">
                <button type="button" className="btn btn-outline-info btn-sm mx-1" onClick={() => props.updateTask(task)}>Update</button>
                <button type="button" className="btn btn-outline-success btn-sm mx-1" onClick={() => props.completeTask(task)}>Complete</button>
                <button type="button" className="btn btn-outline-danger btn-sm mx-1" onClick={() => props.deleteTask(task.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default Task