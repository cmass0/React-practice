import React from "react";
import "./UserItem.css";

function UserItem(props) {
  return (
    <div>
      <li className="user-item">{props.children}</li>
    </div>
  );
}
export default UserItem;
