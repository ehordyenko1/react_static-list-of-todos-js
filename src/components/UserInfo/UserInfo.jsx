export const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
