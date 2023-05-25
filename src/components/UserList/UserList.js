import "./UserList.css";
import UserItem from "../UserItem/UserItem";

function UserList(props) {
  console.log(props.item[0].name, props.item[0].age);
  return (
    <div>
      <section
        style={{
          display: props.item[0].age && props.item[0].name ? "" : "none",
        }}
      >
        <ul id="user-list">
          {props.item.map((user) =>
            user.name && user.age ? (
              <UserItem key={user.id}>
                {`${user.name} (${user.age} years old)`}
              </UserItem>
            ) : (
              <></>
            )
          )}
        </ul>
      </section>
    </div>
  );
}

export default UserList;
