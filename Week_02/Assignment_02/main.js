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

    // const userName = document.createElement("strong");
    // userName.textContent = `Name: ${name}`;
    // listItem.append(userName);
    // [
    //   `Email: ${email}`,
    //   `Company: ${company.name}`,
    //   `City: ${user.address.city}`,
    // ].forEach((value) => {
    //   listItem.append(document.createElement("br"), value);
    // });

    [
      ["Name", name, "fa-user"],
      ["Email", email, "fa-envelope"],
      ["Company", company.name, "fa-building"],
      ["City", user.address.city, "fa-map-marker-alt"],
    ].forEach(([label, value, iconClass], index) => {
      if (index > 0) {
        listItem.append(document.createElement("br"));
      }

      const icon = document.createElement("i");
      icon.classList.add("fas", iconClass);
      icon.setAttribute("aria-hidden", "true");

      const labelElement = document.createElement("strong");
      labelElement.textContent = `${label}: `;

      listItem.append(icon, " ", labelElement, value);
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

// searchbox function
function toggleShow() {
  var el = document.getElementById("box");
  el.classList.toggle("show");
}
