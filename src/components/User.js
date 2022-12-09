import React, { useState, useEffect } from 'react'

function User(props) {

    const [user, setUser] = useState({
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    });


    useEffect(() => {
        setUser(props.user);
    }, []);


    return (
        <tr>
            <td>{user.id}</td>
            <td><input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className="title-desc"></input></td>
            <td><input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="title-desc"></input></td>
            <td><input type="text" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} className="title-desc"></input></td>
            <td className="text-center">
                <button type="button" className="btn btn-outline-info btn-sm mx-1" onClick={() => props.updateUser(user)}>Update</button>
                <button type="button" className="btn btn-outline-danger btn-sm mx-1" onClick={() => props.deleteUser(user.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default User