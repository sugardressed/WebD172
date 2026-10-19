function UserCard({name, email,phone}){
    return(
        <article className="user-card">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>

        </article>
    );
}
export default UserCard;