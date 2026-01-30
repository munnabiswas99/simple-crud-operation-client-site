import React from 'react';

const Users = () => {

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = {name, email};
        console.log(newUser)

        //create user i the database
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser),
        })
        .then(res => res.json())
        .then(data => {
            console.log('Data after creating userin the DB', data);
        })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleAddUser}>
                    <input name='name' type="text" />
                    <br />
                    <input name='email' type="email" />
                    <br />
                    <input type='submit' value="Add user" />
                </form>
            </div>
        </div>
    );
};

export default Users;