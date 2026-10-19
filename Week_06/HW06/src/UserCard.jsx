function UserCard({name,email,phone}){
    return(
        <article className="user-name">
        <h2>{name}</h2>
        <p>EMail: {email}</p>
        <p>Phone: {phone}</p>
        </article>

    );
}

export default UserCard;