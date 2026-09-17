import { getUsers } from "./api.js";
const userList = document.getElementById("userList");
const searchInput = document.getElementById("userSearch");
const userCount = document.getElementById("userCount");
let users = [];

const displayUsers = () => {
  const searchResults = searchInput.value.trim().toLowerCase();
  const matchingUsers = users.filter((user) =>
    [user.name, user.username, user.email, user.address.city].some((value) =>
      value.toLowerCase().includes(searchResults),
    ),
  );

  userList.replaceChildren();
  userCount.textContent = `${matchingUsers.length} ${matchingUsers.length === 1 ? "user" : "users"} returned`;

  matchingUsers.forEach((user) => {
    const { name, email, company } = user;
    const listItem = document.createElement("li");
    const userName = document.createElement("strong");
    userName.textContent = name;
    listItem.append(userName);
    [email, company.name, user.address.city].forEach((value) => {
      listItem.append(document.createElement("br"), value);
    });
    userList.appendChild(listItem);
  });
};
searchInput.addEventListener("input", displayUsers);

const loadUsers = async () => {
  try {
    users = await getUsers();
    users.sort((a, b) => a.name.localeCompare(b.name));
    displayUsers();
    searchInput.disabled = false;
  } catch (error) {
    userCount.textContent =
      "Unable to load users. Please refresh to try again.";
    console.error(error);
  }
};

loadUsers();
