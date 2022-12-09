import React, { useState, useEffect } from 'react'
import User from './User'

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [users]);


    const getAllUsers = async () => {

        try {
            await fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((data) => setUsers(data));

        } catch (error) {
            console.log(error);
        }
    }


    const createUser = async () => {

        const user = {
            id: 1,
            name: 'test name',
            email: 'test email',
            phone: '99999999'
        }

        try {
            await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-type': 'application/json; charset=UTF-8', },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(`User Created. ID:${data.id}, Name: ${data.name}`);
                    alert(`---USER CREATED---\nID: ${data.id}\nNAME: ${data.name}`);
                });

        } catch (error) {
            console.log(error);
        }
    }


    const updateUser = async (user) => {

        try {
            await fetch('https://jsonplaceholder.typicode.com/users/' + user.id, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: { 'Content-type': 'application/json; charset=UTF-8', },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(`User Updated. ID:${data.id}, Name: ${data.name}, email: ${data.email}, phone: ${data.phone}`);
                    alert(`---User UPDATED---\nID: ${data.id}\nNAME: ${data.name}\nEMAIL: ${data.email}\nPHONE: ${data.phone}`);
                });

        } catch (error) {
            console.log(error);
        }
    }



    const deleteUser = async (id) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id, { method: 'DELETE' });
            console.log(`User Deleted. ID:${id}, Reponse Status: ${response.status}`);
            alert(`Reponse Status: ${response.status} Deleting User with id: ${id}`);

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container py-4">
            <h2 className='text-center'>Users List</h2>
            <button type="button" className="btn btn-primary btn-sm mb-1" onClick={createUser}>New User</button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th className="text-center">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <User key={user.id}
                            id={user.id}
                            user={user}
                            updateUser={updateUser}
                            deleteUser={deleteUser}
                        />))}
                </tbody>
            </table>
        </div>
    )
}

export default Users