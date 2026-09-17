export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`Unable to fetch users: ${response.status}`);
  }

  const users = await response.json();
  return users;
};
