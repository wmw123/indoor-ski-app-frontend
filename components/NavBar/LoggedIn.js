import Link from "next/link";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selector";
import { logOut } from "../../redux/user/action";

export default function LoggedOut() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <li>{user.name}</li>
      <li>
        <button onClick={() => dispatch(logOut())}>Logout</button>
      </li>
    </>
  );
}
