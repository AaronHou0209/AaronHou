const users = [
  {
    id: 1,
    name: "Alan Smith",
    age: 20,
    email: "alan@gmail.com",
  },
  { id: 2, name: "John Smith", age: 22, email: "john@gmail.com" },
  { id: 3, name: "Christina Lee", age: 21, email: "christina@gmail.com" },
];

const Users = () => {
  return (
    <div>
      {users.map((user) => (
        <div>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Users;
