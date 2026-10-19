import React from 'react';
import {useEffect, useState} from 'react';
import UserCard from './UserCard.jsx';


function App(  ){

    const [users, setUsers]= useState([]);//array
    const [search, setSearch]=useState(['']);//string

    useEffect(function () {
        async function getUsers(){
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            //convert to JSON
            const data= await response.json();
            setUsers(data);//capture user and convert to data
             console.log(data);//for testing
        }

        getUsers(); //retrieve users

       

    },[ ]);

    return (
        <>
        </>
    );
}

export default App;