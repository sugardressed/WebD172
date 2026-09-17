import { getUsers } from "./api.js";

const displayUsers = async () => {
    const users = await getUsers();

    const userList = document.getElementById("userList");

    users.forEach((user) => {
        const { name, email, company } = user;

        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <strong>${name}</strong><br>
            ${email}<br>
            ${company.name}
        `;

        userList.appendChild(listItem);
    });
};

displayUsers();