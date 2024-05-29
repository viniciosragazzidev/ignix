export const getUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();
  return user;
};
