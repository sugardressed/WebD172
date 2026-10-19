// import React from 'react';
import {useEffect, useState} from 'react';
import UserCard from './UserCard.jsx';
import './App.css'

function App(  ){

    const [users, setUsers]= useState([]);//array
    const [search, setSearch]=useState('');//string

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

    const filteredUsers = users.filter(function (user){
      return user.name.toLowerCase().includes(search.toLowerCase());
    });



    return (

<div>
  <header>
    <h1>React User API Explorer</h1>
  <p>Explore users loader from a public API</p>
</header>  

<main>
  <section className="search-box">
  <label htmlFor="search"></label>
  <div className="container">
<input 
id="search"
type="text"
placeholder='Search by Name'
onChange={function (event){
  setSearch(event.target.value);
}}
/>
</div>
</section>


  <section className="userList" aria-label="Users">
    {filteredUsers.map(function (user){
      return(
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      );
      })}
      </section>

</main>

</div>
    );
}

export default App;