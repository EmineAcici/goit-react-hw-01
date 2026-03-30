import css from "./FriendsList.module.css";
import clsx from "clsx";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline )}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
